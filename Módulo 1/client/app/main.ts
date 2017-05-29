import{platformBrowserDynamic} from "@angular/platform-browser-dynamic";//inclui o módulo para carregar no browser.
import{AppModule} from "./app.module";//incorpora o módulo "root" mas para isso eu tenho que ter exportado ele préviamente

const platform = platformBrowserDynamic(); //poderia criar uma var para formar a plataforma, mas como ela não será alterada, usamos o const
platform.bootstrapModule(AppModule); //indico que o bootstrap ou "primeiro módulo" desta plataforma é o AppModule.


