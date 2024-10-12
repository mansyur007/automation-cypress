// locators.js
export const common = {
    h1: 'h1',
    h5: 'h5',
    txtInput: 'div.txt-input',
    click_expand: '.spec-updown',
    color_option_red: 'input[data-value="Red"]',
    color_option_white: 'input[data-value="White"]',
    filter_button: '.wrap-more-filter',
    sub_menu: '.company-sub-menu,' +
        '.content-company-sub-menu,' +
        '.sub-menu,' +
        '.content-sub-menu',
    bottom_menu: '.bottom-com',
    product_item: '.product-item',
    container_feature:'.container-featured' ,
    feature_carausel: '.featured-carousel',
    carausel: '.carousel',
    slick_list: '.slick-list',
    slick_track: '.slick-track',
    text_area: '.text-area',
    image_wrapper: '.image-wrapper',
    design_hov_com : '.design-hov-com',
    cta_button_img : '.cta-button > img',
    button_star:'.button-star' ,
    library_hov_on: '.library-hov-on',
    library_hov_off : '.library-hov-off',
    icon_star_off: '.icon-star-off',
    icon_star_on: '.icon-star-on',
    visible_icon_star_on: '.icon-star-on:visible',
    visible_icon_star_off: '.icon-star-off:visible'
}

export const imgLocator={
    share_button_whatsapp: 'img[src*="/assets/img/svg/share-whatsapp-grey-small.svg"][class="default-image"]'
}
export const iframeLocator={
    txt_area_iframe: 'iframe[title="Editor, BusinessDescription"]' +
        ',iframe[title="Rich Text Editor, business_description"]'
}

export const carausel = {
    project_feature: '#projectFeatured',
    container: 'container-featured',
    feature_carausel: 'featured-carousel',
    carausel_element: 'carousel',
    slick_next: '.slick-next',
    slick_previous: '.slick-prev',
    latest_article: '#highlightsFeatured',
    product_updates: '#productUpdatesFeatured',
}

export const loginPageLocators = {
    login_button: '#login-header-btn',
    email_field: '#EmailAddressLogin',
    password_field: '#passwordLogin',
    submit_button: '#submit-login',
    google_connect_button: 'a#signUpButtonGooglePropertyOwner'
};
export const flagCheckbox = {
    countryFlag_checkbox: 'span.country-checkbox-text'
}

export const headerUserMenu = {
    usermenu_button: 'div.header-user-menu-wrapper.member',
    logout_button: '#nav-user-detail-menu-member-logout',
    message_button: '.header-message-icon-area > .basemsgicon',
    nav_button: '.navigation-wrapper',
    select_language_button: '#languages-header-btn',
    select_language_container: '.language > .content',
    explore_dropdown_button: '#homepage-header-explore',
    explore_dropdown_container: '#homepage-header-explore > .other-menu-list',
    category_container: '.homepage-header-wrapper > .text-wrapper',
    account_icon: '#user-header-btn',
    account_my_account: '#nav-user-detail-menu-member-my-account'
}

export const homePage = {
    search_input: '#mainSearchInput',
    search_button: '#mainSearchInputButton',
    browse_products_button: '#main-search-brower-product-btn > button',
    browse_brands_button: '#main-search-brower-brand-btn > button',
    news_container: '#latest-news-section',
}

export const productPage = {
    product_container: '.brand-container > #page-1',
    product_img: '.brand-container > #page-1 > :nth-child(1) > .image-area > a > img',
    product_title: '.brand-container > #page-1 > :nth-child(1) > .caption > h6',
    enhanced_spec_checkbox: 'label.checkbox-label[for="checkbox-filter-enhanced"]',
    enhanced_spec_icon: 'img.nbs[alt="icon enhanced product"]',
    featured_product: '#productFeatured',
    index_data_featured_product_1: '[data-slick-index="1"]',
    index_data_featured_product_2: '[data-slick-index="2"]',
    notice_body: '.noty_body',
    company_title: '#companyDetailCompany'
}

export const brandPage = {
    brand_img: ':nth-child(1) > .item-brands > .image-wrapper > a > .img-pad > .img-main',
    brand_name: ':nth-child(1) > .item-brands > .caption-brands > .brands-txt1 > a',
    brand_all_category: 'a[name="All Categories"]',
    brand_accessibility: 'div#product-cat-0',
    brand_sub_accessibility: 'a[name="Accessibility"]',
    brand_product_item: 'div.product-item',
    brand_company: '#companyDetailBoxGlobal',
    dropdown_sort: 'div[id="dropDownSortBy"] div[class="toggle-area"]',
    ASC_sort: '#sortByList > [val="asc"] > span > h5',
    DESC_sort: '#sortByList > [val="desc"] > span > h5',
    relevant_sort: '#sortByList > [val="default"] > span > h5',
    latest_sort: '#sortByList > [val="latest"] > span > h5',
    dropdown_brand: 'div[id="dropdown-brand"] div[class="toggle-area"]'
}
export const categoriesPage = {
    main_bathroom: 'div#product-cat-2',
    sub_fitting: 'a[name="Fittings & Accessories"]',
    main_appliance: 'div#product-cat-2',
    sub_oven_cooking: 'a[name="Ovens and cooking"]',
    sub_lvl3_microwave: 'a[name="Microwave"]'
}

export const professionalsPage = {
    proffessinals_container: '#page-1',
    professionals_img: '.main-image',
    professionals_name: '.title'
}

export const projectsPage = {
    projects_container: '.bci-listing_content',
    projects_img: '.bci-listing_product-image > a > img',
    projects_name: '.title > a'
}

export const articlesPage = {
    articles_container: '.blog-content',
    articles_img: '.banner-blog > .img-wrap-banner',
    articles_head_title: '.banner-blog > .mobb-padding > .title-head-blog'
}

export const searchResultPage = {
    search_result_page_header: '.search-result-text',
    list_result_container: '#new-home-page',
    list_item_wrapper: '.image-item-wrapper',
    list_item_name: '.image-item-wrapper > a > .name',
    search_keyword: 'input[name="filter-keywords"]',
    search_manufacturer: 'input#search_brand_desk_1',
    search_manufacturer3: 'input#search_brand_desk_3',
    sustainable_checkbox: '//label[@for="checkbox-filter-sustainable"]'
}
export const labelManufacturer = {
    top_row_lvl3_item: '#brand_check_list_3 > :nth-child(1) > .asr-checkbox > :nth-child(1)',
    top_row: 'input[type="checkbox"][data-parent-name="brand_filter"]'
}

export const drawingFiles = {
    label_others: '.subcategory-list-wrapper > :nth-child(6) > .row > :nth-child(6) > .asr-checkbox > :nth-child(1)',
    label_step: '.subcategory-list-wrapper > :nth-child(6) > .row > :nth-child(5) > .asr-checkbox > :nth-child(1)'
}
export const countryManufacturer = {
    dropdown_country_manufacturer: '#select2-selectManufacturedIn3-container',
    country_list: '[id^="select2-selectManufacturedIn"]',
    search_country_manufacturer: '.select2-search__field'
}

export const homePageLocators = {
    welcomeMessage: '#welcome',
};

export const savedCompaniesPage = {
    delete_item_design: 'div.delete-item.pro',
    close_icon_button: 'img[alt="close icon"]',
    delete_item_supplier: 'div.delete-item.supplier',
    sort_1: ':nth-child(2) > .sort-by-link > .drop_down_list_label',
    sort_2: ':nth-child(2) > .sort-by-link > .drop_down_list_label',
    sort_3: ':nth-child(3) > .sort-by-link > .drop_down_list_label',
    supplier_categories: '.supplier-click',
    professional_categories: '.professional-click',
    professional_list: '.body-accordv3 > .category-list > #design_professionals',
    brand_list: '.body-accordv3 > .category-list > #brands'
}
export const subfolderPage = {
    add_button_img: '.item-box > .image-area > .add-button',
    create_subfolder: '#createSubFolderInput',
    button_create_subfolder: '#btn-create-folder',
    subfolder_1: '.option-area > :nth-child(1) > img',
    button_edit: '#btn-edit-folder',
    item_list_item_folder: '.item-list.masonry-item-folder',
    image_area: '.image-area > a'


}


export const accountPage = {
    edit_button: '.edit-click',
    edit_email_input: '#editEmailInput',
    save_email_button: '#save_email',
    edit_current_password_input: '#editCurrentPasswordInput',
    edit_new_password_input: '#editNewPasswordInput',
    edit_confirm_password_input: '#editConfirmPasswordInput',
    save_edit_password: '#save-edit-password',
    first_name_input: '#FirstName',
    last_name_input: '#LastName',
    date_birth_input: '#DateOfBirth',
    where_live_input: '#select2-WhereILive-container',
    select_city_dropdown: '.select2-results__option > span',
    search_city_input: '.select2-search__field',
    phone_number_input: '#PhoneNumber',
    about_me_input: '#AboutMe',
    save_edit_profile: '#ProfileInfoSectionButton',
}

export const homeMemberPage = {
    sub_menu_container: '.content-sub-menu',
    sub_menu_company_container: '.content-company-sub-menu',
    manage_company: '.back-to-personal'
}

export const designFolderPage = {
    add_design_folder_button: '.add-button',
    folder_name_input: '#createSubFolderInput',
    create_folder_button: '#btn-create-folder',
    folders_list_container: '.right-area > .theiaStickySidebar',
    option_popup_button: '.popup-content',
    design_folder_box: '.item-box.card-hover',
    folder_title_name: '.category-list > .main-title', // title inside folder != folder name/folder title
    add_design_sub_folder_button: '.item-box > .image-area > .add-button',
    deletion_folder_name: '.infodynamic',
    ok_modal_button: '#confirm_ok',
    rename_folder_name_imput: '#renameDesignFolderInput',
    rename_folder_button: '#btn-edit-folder',
    sort_button: '.toggle-area',
    sort_dropdown_container: '.drop-down-wrapper > ul',
    folder_name: '.item-box > .text-area > .title',
    create_specsheet_input: '#name-createSpecsheetInput',
    create_specsheet_button: '#btn-createSpecsheetModal',
    specsheet_title_name: '#specsheetNameTitle',
    add_image_button: '#add-images-button > .image-area > .add-button,' +
        '.add-button',
    custom_upload: '.custom-upload-image',
    file_locator: 'input[type="file"], input[type="file"]#file-document',
    confirm_add: '#addImageToDesignFolderModal > .modal-dialog > .button-area > .bluprin-button-black'

}
export const myLibrabryPage = {
    search_field: '.input-search-mylibrary',
    collapse_category_button: '.l-product-category > .sidebar-accordv3 > .arrow-accordv3 > img',
    collapse_brand_button: '.l-brands > .sidebar-accordv3 > .arrow-accordv3 > img',
    select_product_category: '.l-product-category',
    top_row_brands: '#leftbrands > :nth-child(2)',
    all_brands: '#leftbrands > :nth-child(1)',
    item_row_1: ':nth-child(1) > .image-area > a > img',
    item_row_2: ':nth-child(2) > .image-area > a > img',
    bottom_page: '.bottom-com',
    ribbon_button: '.cta-product-button .tooltip-mylibrary-on',
    add_design_button: '.design-hov-on .cta-product-button',
    compare_icon: '.design-hov-com .cta-product-button',
    board_modal: '.parent-wrapper > .content-add-board-modal',
    select_button: '#selectbttn',
    item_selected_tick_1: ':nth-child(1) > .bgselected',
    item_selected_tick_2: ':nth-child(2) > .bgselected',
    remove_all_item_buttom: '#removeallbt',
    modal_dialog: '.modal-dialog > .content'
}
export const specsheetPage = {
    search_input: 'label > input',
    title_specsheet: '#specsheetNameTitle',
    table: '#id-tbl-specsheet',
    create_new_specsheet: '#createNewSpecsheetButton',
    input_name_specsheet: '#name-createSpecsheetInput',
    list_design_folder: '#select2-designFolderListSelect-container',
    result_design_folder: '#select2-designFolderListSelect-results',
    btn_create: '#btn-createSpecsheetModal',
    dropdown_page: 'label > select',
    selection_table_list: '.sorting_1',
    data_count: '#span-count',
    preview_button: '#previewSpecsheetButton',
    all_in_one_button: '#previewAllInOneSpecsheet',
    dots_button: '.show-pop',
    dots_container: '.webui-popover-content',
    checkbox_excel: '#check-download-excel-label',
    checkbox_one_per_sheet: '#check-download-pdf-2-label',
    download_specsheet_button: '#downloadSpecsheetButtonModal',
    left_header_notes_btn: '#addLeftHeaderNotesButton',
    left_header_notes_left: '#left-header-notes-left-0',
    left_header_notes_right: '#left-header-notes-right-0',
    right_header_notes_button: '#addRightHeaderNotesButton',
    right_header_notes_left: '#right-header-notes-left-0',
    right_header_notes_right: '#right-header-notes-right-0',
    add_product_btn: '.add-product-button',
    input_search_product_field: '#inputSearchProductSpecsheetModal',
    product_list_wrapper: '.product-list-wrapper .product-box',
    btn_upload_product : '.upload-product-button',
    wrapper_specsheet: '.specsheet-list-wrapper',
    add_general_spec_btn: '.right-side > .col-12 > .content-specsheet-item > .content > .add-general-spec-button',
    left_form: '.left-form',
    right_form: '.right-form',
    delete_general_spec: '.spec-list-form > .general-spec-item > .bluprin-input > .right-side > .delete-spec-button',
    btn_edit_annotation: '.specsheet-box > .panel-group > .panel > .panel-heading > .right-area-wrapper > .annotation-wrapper > p.edit-annotation',
    btn_save_annotation: '.specsheet-box > .panel-group > .panel > .panel-heading > .right-area-wrapper > .annotation-wrapper > .annotation-input-wrapper > .bluprin-input > .save-annotation',
    btn_three_dot:'.specsheet-box > .panel-group > .panel > .panel-heading > .right-area-wrapper > .option-wrapper > .click-area',
    wrapper_three_dot:'.specsheet-box > .panel-group > .panel > .panel-heading > .right-area-wrapper > .option-wrapper > .option-list-box > ul',
    btn_edit_divider: '.edit-divider-name',
    btn_save_divider: '.divider-name-wrapper > .divider-name-input-wrapper > .bluprin-input > .save-divider-name',
    btn_delete_devider: '.delete-divider > img',
    btn_minus_collapse: '.specsheet-box > .panel-group > .panel > .panel-heading > .right-area-wrapper > [data-toggle="collapse"] > .icon-accordion-minus',
    btn_plus_icon: '.collapsed > .icon-accordion-plus',
    tr_row: 'tr[role="row"]',
    sort_asc: '.sorting_asc',
    sort_desc: '.sorting_desc',
    btn_specsheets_tri_dots: '.show-pop > img',
    wrapper_content: '.webui-popover-content',
    btn_rename_specsheet: '.rename-title > img',
    field_rename_input: '#renameSpecsheetInput',
    btn_submit_name_edit: '#submitSpecsheetNameEdit',
    checkbox_first_row: '.sorting_1 > .squaredThree > .checkbox-label',
    btn_remove: '.secondary-button',

}
export const designProfesionalPage = {
    head_office_container: '#HeadOffice',
    branch_office_container: '#BranchOffice',
    sub_menu: '.company-sub-menu,.content-company-sub-menu,.sub-menu'
}
export const companyUpdates={
    create_new_update: '//button[@class="main-button" and @name="button"]',
    field_title: '#update-title-input',
    dropdown_category: '#select2-updates-type-input-container',
    content_dropdown:'.select2-dropdown',
    upload_cover: '#flag-input-cover',
    field_description: '#updatesDescription',
    field_content: '.note-editable',
    checkbox_yes: ':nth-child(1) > .checkmark',
    btn_submit: '#UpdatesButton',
    content_menu_update: '.category-list > .menu_updates_category_list',
    select_show_updates:'select[name="DataTables_Table_0_length"]',


}
export const designProjectPage ={
    create_new_project_btn : "//button[contains(text(),'Create New Project') and @class='main-button']",
    view_as_visitor_btn: '.secondary-button',
    project_name: '#ProjectName',
    field_project_type: '#select2-property_type-container',
    dropdown_project_type: '.select2-dropdown > .select2-search > .select2-search__field',
    value_project_type: '#select2-property_type-results',
    field_project_location: '#Location',
    field_project_city: '#select2-city_id-container',
    dropdown_project_city: '.select2-dropdown > .select2-search > .select2-search__field',
    value_project_city: '#select2-city_id-results',
    project_description: '#BusinessDescription',
    field_project_style: '.design-style-form > .select2 > .selection > .select2-selection > .select2-selection__rendered',
    field_project_area:'#AreaSize',
    field_project_architect: '#ArchitectorDesinger',
    field_project_contractor: '#Contractor',
    field_project_photographer: '#Photographer',
    btn_add_product: '.add-product-used-button',
    field_search_product: '#searchProductUsedModalInput',
    btn_add_product_project: '#addProductUsedButtonModal',
    checkbox_1: ':nth-child(1) > .label-checkbox-parent > .label-checkbox-child',
    checkbox_2: ':nth-child(2) > .label-checkbox-parent > .label-checkbox-child',
    upload_cover: '#upload-cover-drop',
    upload_project: '#section-account',
    form_upload_edit: '.form-pro-edit',
    result_option: '.select2-results__options',
    button_action_from: '.action-form-button',
    wrapper_project_status:':nth-child(1) > .left-box > .body-accordv3 > .category-list',
    wrapper_project_location: '.category-list > .menu_location_list',
    wrapper_project_categories: '.category-list > .menu_project_category_list',
    button_download_excel: '.dt-button > span',
    button_tree_dots: ':nth-child(7) > .show-pop > img, :nth-child(8) > .show-pop > img',
    wrapper_tree_dots: '.webui-popover-content',
    wrapper_confirmation:'.modal-dialog > .body-share > .content',
    cell_status: '#DataTables_Table_0 > tbody > tr > td:nth-child(7)',
    cell_location:'#DataTables_Table_0 > tbody > tr > td:nth-child(5)',
    cell_categories:'#DataTables_Table_0 > tbody > tr > td:nth-child(4)',
    highlight_icon: 'img[alt="icon features highlight"]',
    button_remove_used_product: '.product-used-list .button-remove-area',
    remove_cover_btn: '.remove-cover-button',
    remove_project_btn: '.remove-project-button'


}
export const headOfficePage = {
    company_name_input: '#head-office-company-name-input-1',
    address_input: '#head-office-address-input-1',
    phone_number_input: '#head-office-phone-number-input-1',
    fax_number_input: '#head-office-fax-number-input-1',
    website_input: '#head-office-website-input-1',
    email_input: '#head-office-email-input-1',
    save_button: '.submit-head-office-button'
}
export const branchOfficePage = {
    company_name_input: '#branch-office-company-name-input-1',
    address_input: '#branch-office-address-input-1',
    phone_number_input: '#branch-office-phone-number-input-1',
    fax_number_input: '#branch-office-fax-number-input-1',
    website_input: '#branch-office-website-input-1',
    email_input: '#branch-office-email-input-1',
    save_button: '.submit-branch-office-button'
}
export const tagsPage = {
    status_list_container: '.category-list > .menu_tagged_project_status_list',
    supplier_list_container: '.category-list > .menu_product_supplier_list',
    view_per_page: 'select',
    status_label: '.action-button-single.grey.link',
    table_container: '#DataTables_Table_0 > tbody',
    table_wrapper: '#DataTables_Table_0_wrapper',
    category_list_container: '.category-list > .menu_product_used_category_list',
    pagination1: '[data-dt-idx="1"]',
    pagination2: '[data-dt-idx="2"]',
    pagination3: '[data-dt-idx="3"]',
    table_header_project: '#tableHeadProjectName',
    table_header_supplier: '#tableHeadSupplierName',
    table_sort_result_first: ':nth-child(1) > .sorting_1',
    modal_delete_button:'#confirmationModalDelete'
}
export const projectPage = {
    project_title: '.title-project',
    add_brand_button: '.body-accordv3 > .main-button',
    dropdown_brand: '[id^="select2--"][id$="-container"]',
    search_brand_input: '.select2-search__field',
    search_brand_container: '.select2-results__option',
    category_checkbox_container: '#tagYourBrandProModal',
    tag_brand_button: '.tag-your-pro-modal',
}
export const accreditationsPage = {
    create_accreditation_button: '.main-button',
    title_input: '#accreditation-title-input',
    category_dropdown: '#select2-accreditation-category-input-container',
    category_result: '.select2-dropdown.select2-dropdown--below',
    upload_image_cover: '#flag-input-cover',
    image_uploaded: '.image-prev > .dat_images',
    upload_document: '#wrap_userfile_preview > .newinput',
    submit_button: '#AccreditationButton',
    accreditation_name_first_row: 'tbody > :nth-child(1) > :nth-child(3) > a',
    category_container: '.category-list > .menu_accreditation_category_list',
    accreditation_category_first_row: 'tbody > :nth-child(1) > :nth-child(4)',
    dots_button_first_row: ':nth-child(1) > :nth-child(6) > .show-pop > img',
    view_document: '#doc-link',
    remove_uploaded_image: '#icon_dat_images > .wrao-change > .txtdel > img',
    delete_button: '.content > .main-button',
    document_uploaded: '.newinput > .userfile_preview',
    dots_result_container: '.webui-popover-content',
}
export const analyticsPage = {
    side_menu_container: '.theiaStickySidebar',
    summary_area_title: '#GeneralSection > .body-togg-dat > :nth-child(1)',
    summary_container: '#generalSummaryProjectsBoxWrapper',
    graph_title: '.card-acc-body > .subtitle-sec',
    graph_area_container: '#chart-area2',
    project_area_title: '#ProfileSection > .body-togg-dat > .subtitle-sec',
    graph_date_from: '#graf-date-from',
    graph_date_to: '#graf-date-to',
    date_picker_switch: '.datepicker-switch',
    date_picker_years: '.datepicker-years > .table-condensed',
    date_picker_months: '.datepicker-months > .table-condensed',
    submit_go_button: '#submitDateForTotalViews',
    search_go_button: '.search-button-datatable',
    project_table_first_row: 'tbody > :nth-child(1) > :nth-child(2)',
    clear_search_button: '.clear-button-datatable',
    date_table_head: 'thead > tr > :nth-child(1)',
    date_table_first_row: 'tbody > :nth-child(1) > :nth-child(1)',
    project_table_head: 'thead > tr > :nth-child(2)',
    images_table_head: 'thead > tr > :nth-child(3)',
    images_table_first_row: 'tbody > :nth-child(1) > :nth-child(3)',
    views_table_head: 'thead > tr > :nth-child(4)',
    views_table_first_row: 'tbody > :nth-child(1) > :nth-child(4)',
}
export const moodboardPage = {
    create_button:'#createNewSpecsheetButton',
    name_input: '#name-createSpecsheetInput',
    submit_create_button: '#btn-createSpecsheetModal',
    create_canvas_button: '#createCanvasButton',
    sidebar: '#sideBar',
    sidebar_photos: '#sidebarPhoto',
    photos_container: '.photos-menu > .content-area > .mood-txt',
    search_input: ' .search-area > .search-input-box',
    leftside_container: '#leftSide',
    uploaded_image_name: '.file-name-upload-input',
    submit_upload_images: '.bluprin-button-black',
    save_button: '#saveButton',
    exit_canvas_button: '#exitButton',
    dots_first_row: ':nth-child(1) > :nth-child(10) > .show-pop > img',
    name_first_row: '#id-tbl-specsheet > :nth-child(1) > :nth-child(2) > a',
    delete_confirmation: '#confirm_ok'
}
export const companySettings={
    field_company_name: '#CompanyName',
    field_company_email:'#business_email',
    field_company_phone:'#business_phone',
    dropdown_company_business: '#select2-business_category_id-container',
    content_company_business:'#select2-business_category_id-results',
    city_dropdown_container: '#select2-city_id-container',
    city_dropdown_results: '#select2-city_id-results',
    zip_code: '#ZipCode',
    business_address: '#business_address',
    website: '#Website',
    facebook: '#Facebook',
    instagram: '#Instagram',
    twitter: '#Twitter',
    linkedin: '#Linkedin',
    whatsapp: '#Whatsapp',
    viber: '#viber',
    btn_update:'#BusinessDetailsButton',
    btn_update_business: '#BusinessProfileButton',
    view_profile:'a > .bluprin-button-blue',
    view_btn_phone: '#gtmViewProPhone > .view-button > img',
    view_btn_website: '#gtmViewProWebsite > .view-button > img',
    view_btn_instagram: '#gtmViewProInstagram > .view-button > img',
    view_btn_facebook: '#gtmViewProFacebook > .view-button > img',
    view_btn_twitter: '#gtmViewProTwitter > .view-button > img',
    view_btn_whatsapp: '#gtmViewProWhatsapp > .view-button > img',
    view_btn_viber: '#gtmViewProViber > .view-button > img',
    view_btn_linkedin: '#gtmViewProLinkedin > .view-button > img',
    left_link_phone: '.left-phone > a',
    left_link_website: '.left-website > a',
    left_link_instagram: '.left-instagram > a',
    left_link_facebook: '.left-facebook > a',
    left_link_twitter: '.left-twitter > a',
    left_link_whatsapp: '.left-whatsapp > a',
    left_link_viber: '.left-viber > a',
    left_link_linkedin: '.left-linkedin > a'
}

