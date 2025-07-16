# Vue VPN Detector

## Description
Vue VPN Detector is a lightweight library designed to detect if a user is using a VPN in Vue.js-based applications. It provides a simple and efficient API to integrate VPN detection into your project.

## Features
- Fast and accurate VPN detection.
- Easy integration with Vue.js projects.
- Flexible and extensible API.

## Installation

Use npm or yarn to install the library:

```bash
npm install vue-vpn-detector
```

Or with yarn:

```bash
yarn add vue-vpn-detector
```

## Basic Example

Import and use the library in your Vue.js project:

```javascript
import { useVpnDetector } from 'vue-vpn-detector';

export default {
  setup() {
    const { isUsingVPN } = useVpnDetector();

    if (isUsingVPN.isVpn) {
      console.log('The user is using a VPN.');
    } else {
      console.log('The user is not using a VPN.');
    }
  },
};
```

## Accessible Properties

* isVpn (Response example: "false")
* continent (Response example: "North America")
* country (Response example: "United States")
* countryCode (Response example: "US")
* region (Response example: "CA")
* regionName (Response example: "California")
* city (Response example: "San Jose")
* isp (Response example: "Google LLC")
* org (Response example: "Google Public DNS")
* hosting (Response example: "true")
* query (Response example: "8.8.8.8")

### WARNING

There is a limit of 45 requests per minute, so if this limit is exceeded, the API will return an HTTP 429 error. Make sure to handle errors properly in your application.

The limit is set by the ip-api.com API. If you need to make more than 45 requests per minute, you must subscribe to one of their paid plans and modify the library to integrate your API KEY.

## Providers Used for Functionality

https://ip-api.com | To obtain detailed information about the IP.
&
https:/ipify.org | To obtain the IP.

## Contribution

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Author

Created by David Leon. If you have any questions, feel free to contact me.

---

Thank you for using Vue VPN Detector! I hope this library is useful for your Vue.js project.
