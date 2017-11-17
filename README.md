# ui5-lib-webide-demo

This is just a demo project to illustrate how smoothly you can implement a ui5 library and an app in the SAP Web IDE Full-Stack. All you need to do is uploading the 2 zip files into the SAP Full-Stack Web IDE, then you deploy the lib project, finally you run the app project. Done. For details see the links below.

# Links
1. Blog: [Implementing a custom UI5 lib and a UI5 app consuming the lib using SAP Full-Stack WebIDE with Grunt](https://blogs.sap.com/2017/11/03/implementing-a-custom-ui5-lib-and-a-ui5-app-consuming-the-lib-using-sap-full-stack-webide-with-grunt/)
2. Screencast on Youtube: [https://www.youtube.com/watch?v=CmLNJoAEKq0](https://www.youtube.com/watch?v=CmLNJoAEKq0)

# Checknig the App Index (after deployment)

1. After deployment to SAPCP check the App Index for each of the deployed projects, i.e.:
    - nabi.sample.ui5lib
	    - https://flpnwc-ac5318705.dispatcher.hana.ondemand.com/sap/bc/ui2/app_index/ui5_app_info?id=nabi.sample.ui5lib
		- https://flpportal-p501141trial.dispatcher.hanatrial.ondemand.com/sap/bc/ui2/app_index/ui5_app_info?id=nabi.sample.ui5lib
		- https://flpnwc-ac5318705.dispatcher.hana.ondemand.com/sap/bc/ui2/app_index/ui5_app_info_json?id=nabi.sample.ui5lib

	- nabi.sample.ui5app
	    - https://flpnwc-ac5318705.dispatcher.hana.ondemand.com/sap/bc/ui2/app_index/ui5_app_info?id=nabi.sample.ui5app
		- https://flpportal-p501141trial.dispatcher.hanatrial.ondemand.com/sap/bc/ui2/app_index/ui5_app_info?id=nabi.sample.ui5app
		- https://flpnwc-ac5318705.dispatcher.hana.ondemand.com/sap/bc/ui2/app_index/ui5_app_info_json?id=nabi.sample.ui5app

	
	**FYI**: The `id` parameter is the corresponding SAPUI5 Component ID, i.e. try `sap.m` to see how a correct result should look like and compare it with the result of your own component.

1. What about the ABAP App Index?

Yes, there is also an App Index in ABAP. In fact, you only need to replace the host etc so that the URLs above point to your ABAP server, i.e.:

- https://abap.mycompany.com/sap/bc/ui2/app_index/ui5_app_info?id=nabi.sample.ui5app
- https://abap.mycompany.com/sap/bc/ui2/app_index/ui5_app_info_json?id=nabi.sample.ui5app

As you can see, that works because paths (i.e. /sap/bc/ui2/app_index/ui5_app_info_json?id=nabi.sample.ui5app) are the same on both ABAP and SAPCP.

# Local Build

1. Clone repo and change directory
    `git clone https://github.com/nzamani/ui5-lib-webide-demo.git`
    `cd ui5-lib-webide-demo`

1. Add SAP's NPM package registry (if you haven't already)
    - Local: `npm config set @sap:registry https://npm.sap.com`
	- Global: `npm config --global set @sap:registry https://npm.sap.com`

1. Install NPM Dependencies
    - `npm install`

1. Build Library Project
    - `cd nabi.sample.ui5lib`
	- `grunt`
	- check the dist folder

1. Build App Project
    - `cd ../nabi.sample.ui5app`
	- `grunt`
	- check the dist folder
