import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Observable } from "data/observable"

var observable:Observable =<Observable> new Observable({
        history: false,
        text:"test"
    });
    
export function loaded(args) {
    // Get the event sender
    var page = <Page>args.object;
    
    page.bindingContext = observable;
}
export function Tap(){
    var status:boolean = observable.get("history");
    observable.set("history", !status);
}