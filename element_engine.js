var element_template =
`
<div class="row">
{{#qualities_container}}
    <div class="mybox col-md-4">

    <ul>
        {{#newqualities}}
        <li>
        {{qname}}}}
        </li>
        {{/newqualities}}
    </ul>
    <select id="{{name}}">
        <option value="0">Your Choice</option>
        <option value="1">Least Likely</option>
        <option value="2">Somewhat likely</option>
        <option value="3">A lot likely</option>
        <option value="4">Most Likely</option>
    </select>
    <br><br>

    </div>
{{/qualities_container}}

<div class="col-md-4">
<p>
<br> <br> <br>
<button onclick="ShowResults()">Show Results</button>
<br> <br> <br>
</p>


</div>
</div>
`;

var result_template =
`
<table style="font-family: arial, sans-serif; border-collapse: collapse; width: 30%;">
<tr>
<td style="background-color:red; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{red}}</td>
<td style="background-color:green; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{green}}</td>
<td style="background-color:blue; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{blue}}</td>
<td style="background-color:yellow; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{yellow}}</td>
</tr>
</table>
`;

