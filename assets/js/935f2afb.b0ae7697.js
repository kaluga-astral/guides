"use strict";(self.webpackChunkastral_guides=self.webpackChunkastral_guides||[]).push([[696],{5988:s=>{s.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Intro","href":"/guides/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Permissions. \u041f\u0430\u0442\u0442\u0435\u0440\u043d \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Intro","href":"/guides/docs/permissions/intro","docId":"permissions/intro","unlisted":false},{"type":"link","label":"\u0412\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d\u043e ABAC \u0438 XAML","href":"/guides/docs/permissions/core","docId":"permissions/core","unlisted":false},{"type":"link","label":"\u0415\u0434\u0438\u043d\u044b\u0439 Permissions Module","href":"/guides/docs/permissions/permissionsModule","docId":"permissions/permissionsModule","unlisted":false},{"type":"link","label":"Policies. \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","href":"/guides/docs/permissions/policies","docId":"permissions/policies","unlisted":false},{"type":"link","label":"\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","href":"/guides/docs/permissions/permissionsFormation","docId":"permissions/permissionsFormation","unlisted":false},{"type":"link","label":"Reasons. \u041f\u0440\u0438\u0447\u0438\u043d\u044b \u043e\u0442\u043a\u0430\u0437\u0430 \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435","href":"/guides/docs/permissions/reasons","docId":"permissions/reasons","unlisted":false},{"type":"link","label":"Rules. \u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","href":"/guides/docs/permissions/rules","docId":"permissions/rules","unlisted":false},{"type":"link","label":"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","href":"/guides/docs/permissions/preparingData","docId":"permissions/preparingData","unlisted":false},{"type":"link","label":"Route Guards. \u0414\u043e\u0441\u0442\u0443\u043f\u044b \u043a \u0440\u0443\u0442\u0430\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","href":"/guides/docs/permissions/routes","docId":"permissions/routes","unlisted":false},{"type":"link","label":"Feature Toggle \u0438 Permissions","href":"/guides/docs/permissions/featureToggle","docId":"permissions/featureToggle","unlisted":false},{"type":"link","label":"2FA (Two-factor Auth)","href":"/guides/docs/permissions/2fa","docId":"permissions/2fa","unlisted":false},{"type":"link","label":"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u0430","href":"/guides/docs/permissions/example","docId":"permissions/example","unlisted":false}],"href":"/guides/docs/category/permissions-\u043f\u0430\u0442\u0442\u0435\u0440\u043d-\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438-\u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432-\u043d\u0430-\u043a\u043b\u0438\u0435\u043d\u0442\u0435"},{"type":"link","label":"Issues","href":"/guides/docs/issues","docId":"issues","unlisted":false}]},"docs":{"intro":{"id":"intro","title":"Intro","description":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0444\u0438\u0447\u0438, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u043f\u0440\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 frontend \u0432 \u0410\u0441\u0442\u0440\u0430\u043b-\u0421\u043e\u0444\u0442.","sidebar":"tutorialSidebar"},"issues":{"id":"issues","title":"Issues","description":"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0430\u0432\u0438\u043b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u043b\u0438\u0431\u043e \u043d\u0430 \u0434\u043e\u0441\u043a\u0435 Frontend.Shared, \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 PR \u043d\u0430 Github.","sidebar":"tutorialSidebar"},"permissions/2fa":{"id":"permissions/2fa","title":"2FA (Two-factor Auth)","description":"Permissions \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0430 \u0441 2FAService.","sidebar":"tutorialSidebar"},"permissions/core":{"id":"permissions/core","title":"\u0412\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d\u043e ABAC \u0438 XAML","description":"\u041e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u043f\u0430\u0442\u0442\u0435\u0440\u043d \u0431\u0435\u0440\u0435\u0442 \u0437\u0430 \u043e\u0441\u043d\u043e\u0432\u0443 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b ABAC (Attribute-Based Access Control) \u0438 XAML.","sidebar":"tutorialSidebar"},"permissions/example":{"id":"permissions/example","title":"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u0430","description":"Permissions Module","sidebar":"tutorialSidebar"},"permissions/featureToggle":{"id":"permissions/featureToggle","title":"Feature Toggle \u0438 Permissions","description":"Feature Toggle \u0438 Permissions - \u044d\u0442\u043e \u0434\u0432\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438.","sidebar":"tutorialSidebar"},"permissions/intro":{"id":"permissions/intro","title":"Intro","description":"\u041e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u043f\u0430\u0442\u0442\u0435\u0440\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u0438\u0431\u043a\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432 \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430.","sidebar":"tutorialSidebar"},"permissions/permissionsFormation":{"id":"permissions/permissionsFormation","title":"\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","description":"Permission - \u044d\u0442\u043e \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0443, \u043e\u0431\u0443\u0441\u043b\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438.","sidebar":"tutorialSidebar"},"permissions/permissionsModule":{"id":"permissions/permissionsModule","title":"\u0415\u0434\u0438\u043d\u044b\u0439 Permissions Module","description":"\u0412\u0441\u044f \u043b\u043e\u0433\u0438\u043a\u0430, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0438\u0435\u0441\u044f \u043a \u0434\u043e\u0441\u0442\u0443\u043f\u0430\u043c, \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043c\u043e\u0434\u0443\u043b\u0435 permissions:","sidebar":"tutorialSidebar"},"permissions/policies":{"id":"permissions/policies","title":"Policies. \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","description":"Policies \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u044e\u0442 permissions \u0438 \u0440\u0435\u0448\u0430\u044e\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0440\u043e\u0441\u0442\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 permissions \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438.","sidebar":"tutorialSidebar"},"permissions/preparingData":{"id":"permissions/preparingData","title":"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","description":"\u0414\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043b\u044e\u0431\u044b\u0445 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432 \u043d\u0443\u0436\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u044b\u0435 \u0438\u0437 API.","sidebar":"tutorialSidebar"},"permissions/reasons":{"id":"permissions/reasons","title":"Reasons. \u041f\u0440\u0438\u0447\u0438\u043d\u044b \u043e\u0442\u043a\u0430\u0437\u0430 \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0435","description":"\u041a\u0430\u0436\u0434\u044b\u0439 permission \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442:","sidebar":"tutorialSidebar"},"permissions/routes":{"id":"permissions/routes","title":"Route Guards. \u0414\u043e\u0441\u0442\u0443\u043f\u044b \u043a \u0440\u0443\u0442\u0430\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f","description":"Route Guard - \u044d\u0442\u043e react-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043a \u0440\u0443\u0442\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.","sidebar":"tutorialSidebar"},"permissions/rules":{"id":"permissions/rules","title":"Rules. \u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u0432","description":"Rule - \u044d\u0442\u043e \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0435\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0447\u0430\u0441\u0442\u044c \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f permissions.","sidebar":"tutorialSidebar"}}}')}}]);