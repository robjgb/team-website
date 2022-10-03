// Example API Method:
function robAPI(link) {
    fetch(link)
    .then(
    // HTTP GET Request: 
    function(response) {
        // Error handling
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data); // Use console to check data object contents

        // Popup Notification:
        tata.log("Cat Fact:", data.fact,{
            position: 'tm',
          });
        });
    }
    )
    // Error Handling
    .catch(function(err) {
    return(err);
    });
}
