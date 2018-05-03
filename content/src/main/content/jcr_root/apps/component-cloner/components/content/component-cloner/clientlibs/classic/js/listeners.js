/**
 * Classic UI Listeners.
 */
var componentCloner = {};

/**
 * Function to build URI and send a GET request to the servlet to clone the specified component by its path.
 * See https://helpx.adobe.com/experience-manager/6-3/sites/developing/using/reference-materials/widgets-api/index.html?class=CQ.Dialog
 *     - Public Events
 *          - beforesubmit
 * @param dialog CQ.Dialog
 * @returns {boolean}
 */
componentCloner.clone = function (dialog) {
    var copyPath = dialog.find('name','./path')[0].value,
        uri = dialog.path + '.clone' + CQ.shared.HTTP.EXTENSION_JSON,
        url = CQ.shared.HTTP.addParameter(uri, 'path', copyPath);

    CQ.shared.HTTP.get(url, componentCloner.callback);
    dialog.close();

    return false;
};

/**
 * 'componentCloner.clone' method's callback function.
 * Callback function to handle the response JSON from the component cloner servlet.
 * See https://helpx.adobe.com/experience-manager/6-3/sites/developing/using/reference-materials/widgets-api/index.html?class=CQ.shared.HTTP
 *     - Public Methods
 *          - get method's callback: Function parameter
 * @param options Object
 * @param success Boolean
 * @param response Object
 */
componentCloner.callback = function (options, success, response) {
    var href = window.location.href,
        data = JSON.parse(response.body);

    // remove any existing error query params
    href = href.replace('&componentClonerError=true', '');
    href = href.replace('?componentClonerError=true', '');

    if (!success || data.componentClonerError) {
        href += (href.indexOf('?') > 1 ? '&' : '?') + 'componentClonerError=true';
    }

    window.location.replace(href);
};
