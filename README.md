# fm-connect-mock

Simple application used to mock up fm-connect for the purpose of testing integration.

<br />

![](integration_diagram.png)

<br />

## Open integration

<br />

Open button will launch a new browser/chromium window, firing off an http/s POST request, containing the auth token in the header, to the fmconnect /login endpoint (***denoted by the blue line(s) in the above diagram***).

See sample request below:

```
curl --location --request POST 'https://127.0.0.1:8082/login' --header 'Authorization: Bearer HAOQvqHHmu5Cao-QxdzypOHHIJ12kBsdZqfbmaPrfu5'
```

Assuming at this point the ~/fmconnect/login endpoint would exchange the token for a delegation token & redirect to home page.

<br />
<br />

## Registering callbacks

<br />

As soon as navigation is completed ie. browser window finished loading, the aafx application will start volunteering information via IPC (***denoted by the red line(s) in the above diagram***).

Below code snippets demonstrate how to register callbacks:

```

window.api.onTokenRefresh((newToken) => {
    ...
});


window.api.onClientsUpdate((clients, selectedClient) => {
    ...
});


window.api.onClientSelected((selectedClient) => {
    ...
});

```