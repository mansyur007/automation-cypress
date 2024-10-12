#!/bin/bash

# Check if result_file.txt exists
if [[ ! -f result_file.txt ]]; then
  echo "Result file not found!"
  exit 1
fi

# Read the content of result_file.txt

echo "Full content of log"
cat result_file.txt
echo "End of content"


tail -n 30 result_file.txt > TEST_RESULTS

# Check if TEST_RESULTS was successfully created and is not empty
if [ -s TEST_RESULTS ]; then
  echo "TEST_RESULTS file created successfully."

else
  echo "TEST_RESULTS file is empty or not created."
  exit 1
fi

SPECIFIC_LINE=$(sed 's/\x1b\[[0-9;]*m//g' TEST_RESULTS )
# Escape special characters in test results for JSON

ESCAPED_TEST_RESULTS=$(printf '%s' "$SPECIFIC_LINE" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' -e 's/\n/\\n/g' -e 's/\r//g')


# Determine the status based on the test results
if grep -q '✖' result_file.txt; then
  STATUS="failed"
  STATUS_TEXT="❌ The pipeline for test completed on branch '${BITBUCKET_BRANCH}' has failed."
else
  STATUS="succeeded"
  STATUS_TEXT="✅ The pipeline for test completed on branch '${BITBUCKET_BRANCH}' has succeeded."
fi

# Send the notification
curl -H 'Content-Type: application/json' \
     -d "{
           \"@type\": \"MessageCard\",
           \"themeColor\": \"0072C6\",
           \"title\": \"Pipeline ${STATUS}\",
           \"text\": \"${STATUS_TEXT} [Build Results](https://bitbucket.org/bcisuite/qa_cypress_archify/pipelines/results/${BITBUCKET_BUILD_NUMBER})\",
           \"sections\": [
             {
               \"text\": \"\`\`\`\n${ESCAPED_TEST_RESULTS}\n\`\`\`\"
             }
           ]
         }" \
