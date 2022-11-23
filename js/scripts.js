
$('input[id=faccion2]').click(function(){    
    $("#explicacion").empty();
    $("#explicacion").animate({height: "400px"});
    $("#explicacion").append(" <img id='maelstrom' src='../images/themaelstrom.png'><p>At the heart of the Thalassocratic Navy lies the Crimson Fleet, composed of five independent squadrons,the First through the Fifth. The Maelstrom is an extension of the First Squadron, expanding its role as armada flagship and granting it power to administer not only the remaining four squadrons, but the various merchant fleets that navigate the seas off Vylbrand. With the reestablishment of the Maelstrom, the Admiral has invoked ancient maritime law, by which she promoted herself to Chief Admiral, effectively expanding her authority to cover not only state and military dealings, but grant her the power to directly command all ships in Lominsan waters. While adverse to this encroachment on their independence, the city-state's pirates are willing to put aside their differences, lest the Garlean Empire take more than just their freedom.</p>")
}) 

$('input[id=faccion1]').click(function(){    
   $("#explicacion").empty(); 
   $("#explicacion").animate({height: "400px"});
   $("#explicacion").append(" <img id='twinadder' src='../images/twinaddders.png'><p>The Order of the Twin Adder establishes a medium from which the Seedseers can return from their wanderings deep within the Black Shroud and directly oversee not only the safety of Gridania's citizens, but the workings of the local guard. Both the Gods' Quiver, who defend the forest from external threats, and the Wood Wailers, who protect it from internal strife, have expressed their support of this temporary measure. Although they have proven their aptitude for handling political affairs in light of Calamity and events that followed, there are still those within Gridania who would question the Seedseers' ability to lead a nation into war.</p>")
}) 

$('input[id=faccion3]').click(function(){    
    $("#explicacion").empty(); 
    $("#explicacion").animate({height: "400px"});
    $("#explicacion").append(" <img id='immortalflames' src='../images/immortalflames.png'><p>Currently, the bulk of Ul'dah's military strength comes from their standing army of mercenaries and the now dwindling contingent of palace guards known as the Sultansworn. To bring order to their ranks and oversee additional wartime training, the sultana has resurrected the Immortal Flames—an elite force of battle-hardened veterans that once instilled fear in the city-state's neighboring nations during ages past. This unit would act as a core aspect of the army, essentially bolstering its power, and in effect grant more authority to the sultana and her advisers—something of which those in control of the city-state's economy—namely the Syndicate—are wary.</p>")
 }) 

$("#erase").click(function(){
    $("#explicacion").empty(); 
    $("#explicacion").animate({height: "0px"});
})
