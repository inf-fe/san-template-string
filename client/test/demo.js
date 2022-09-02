const template = /*san*/`
    <!--<div></div>-->
    <div s-if="item">1</div>
    <div s-else-if="item"></div>
    <div s-else></div>
    <div s-for="item in list"></div>
    <div s-for="item,index in list.data"></div>
    <div title="{{title}}"></div>
    <div title="this is {{title}}"></div>
    <div title="this is {{title | upper}}"></div>
    <div onClick="goto"></div>
    <div>{{value}}</div>
    <div>{{value | upper}}</div>
    <div>{{value | upper | html}}</div>
    <div>{{value | comma(commaLength +1)}}</div>
    <div>{{value.name}}</div>
    <div/>
    <ui-label s-bind="{{ {text: email, title: name} }}"></ui-label>
    <input value="{=value=}"/>
    <div s-html="rawHTML"></div>
    <div style="color:red;font-size:12px;"></div>
`
const b = <div s-else>{{ aaaa }}</div>
const f = <div style="color:red;font-size:12px;"></div>
const c = <div />
var x = {
    text: email,
    title: name
}
if (true) {

}
for (let i = 0; i < array.length; i++) {

}