var element_template =
`
<div class="row">
<div class="instructions col-md-12">
<p>
<h1>Instructions:</h1>																
Compare all 4 boxes in each row. 																		
<br>Do not analyze each word; just get a sense of each box. 																		
<br>Score each of the four boxes in each row from most to least as it describes you: 																		
<ul>
<li>Least Likely</li>
<li>Somewhat likely	</li>
<li>A lot likely</li>	
<li>Most Likely</li>
</ul>
</p>
</div>
</div>
<div class="row">
{{#qualities_container}}
    <div class="mybox col-md-3">

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

<div class="col-md-12">
<p>
<br> <br> <br>
<button onclick="ShowResults()" style="float: right;">Show Results</button>
<br> 

<div id="alertcontainer"></div>
</p>


</div>
</div>
`;

var result_template =
`
<table style="font-family: arial, sans-serif; border-collapse: collapse; width: 80%;">
<tr>
<td style="color: white; background-color:red; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{red}}</td>

<td style="color: white; font-size: medium; background-color:red; border: 1px solid #dddddd;  text-align: left; padding: 8px;">

<strong>Personality Style: Mover</strong>
<br><strong>Core Value: Freedom</strong>
<br>The Mover personality style is courageous, exploratory, and playful. 
Movers seek action and adventure
They crave variety and enjoy improvising.
Movers are good at thinking on their feet.
They automatically find the fastest way to do things and make them fun. 
They change course as often as is needed and aren't likely to let bumps in the road slow them down.

</td>
</tr>

<tr>

<td style="color: white; background-color:green; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{green}}</td>

<td style="color: white; font-size: medium; background-color:green; border: 1px solid #dddddd;  text-align: left; padding: 8px;">
<strong>Personality Style: Thinker</strong>
<br><strong>Core Value: Competency</strong>
<br>The Thinker personality style is curious, logical, and self-sufficient. 
Thinkers seek clarity and knowledge. 
They prefer to make calculated decisions. 
Thinkers explore all aspects of an issue and can't help but suggest new ways of doing things. 
They need time to think before making decisions. They can be fiercely independent and value their privacy
</td>

</tr>

<tr>

<td style="color: white; background-color:blue; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{blue}}</td>

<td style="color: white; font-size: medium; background-color:blue; border: 1px solid #dddddd;  text-align: left; padding: 8px;">
<strong>Personality Style: Connector</strong>
<br><strong>Core Value: Relationship</strong>
<br>The Connector personality style is considerate, cooperative, and encouraging. 
Connectors seek harmony and personal connection. 
They prefer to make decisions that feel good and are in alignment with their values. 
Connectors naturally interact with others and connect meaning to events. They excel at recognizing strengths in others and place a high importance on person growth. 
</td>

</tr>

<tr>

<td style="color: black; background-color:yellow; border: 1px solid #dddddd;  text-align: center; padding: 8px;">{{yellow}}</td>


<td style="color: black; font-size: medium; background-color:yellow; border: 1px solid #dddddd;  text-align: left; padding: 8px;">
<strong>Personality Style: Planner</strong>
<br><strong>Core Value: Responsibility</strong>
<br>The Planner personality style is organized, prepared, and dependable. Planners seek order and fairness. 
They crave consistency and having things in their place. 
Planners are naturally able to distinguish right from wrong. 
They like to keep their personal space well-tended and pay attention to details. 
They seek a sense of completion and enjoy crossing items off a list. 
</td>
</tr>
</table>
</table>

`;

