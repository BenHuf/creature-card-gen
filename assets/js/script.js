var $container = $("#container")

var deObjectify = function(obj) {
    var str = JSON.stringify(obj);
    str = str.replace(/[{}]/g,'');
    str = str.replace(/"/g, '');
    str = str.replace(/:/g, ' ');
    str = str.replace(/,/g, ', ');
    return str;
}

var nullChecker = function(val) {
    if(!val) {
        val = '-'
    }
    return val;
}


var getApi = function() {
    var requestUrl = 'https://api.open5e.com/monsters.json';

fetch(requestUrl)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (var i = 0; i < data.results.length; i++) {
            
            var results = data.results[i];

            var name = results.name
            var size = results.size
            var type = results.type
            var alignment = results.alignment
            var armorClass = results.armor_class
            var armorDescription = nullChecker(results.armor_desc)
            var hitPoints = results.hit_points
            var hitDice = results.hit_dice
            var speedVal = results.speed
            var speed = deObjectify(speedVal);
            var STR = results.strength
            var DEX = results.dexterity
            var CON = results.constitution
            var INT = results.intelligence
            var WIS = results.wisdom
            var CHA = results.charisma
            var strSave = nullChecker(results.strength_save)
            var dexSave = nullChecker(results.dexterity_save)
            var conSave = nullChecker(results.constitution_save)
            var intSave = nullChecker(results.intelligence_save)
            var wisSave = nullChecker(results.wisdom_save)
            var chaSave = nullChecker(results.charisma_save)
            var savingThrows = "STR " + strSave + ", DEX " + dexSave + ", CON " + conSave + ", INT " + intSave + ", WIS " + wisSave + ", CHA " + chaSave
            var skills = deObjectify(results.skills)
            var senses = results.senses
            var languages = results.languages
            var challenge = results.challenge_rating
            var abilities = results.special_abilities
            var actions = results.actions
            var reactions = results.reactions


            var $card = $('<div>').attr('id', [i]).addClass("border w-100 p-3 my-3 mx-3 col-10 col-md-5").appendTo($container)
            var $nameBlock = $('<div>').addClass("name-block border-bottom border-danger").appendTo($card)
            var $statBlock = $('<div>').addClass("stat-block border-bottom border-danger").appendTo($card)
            var $abilityScoreBlock = $('<table>').addClass("ability-table w100 border-bottom border-danger").appendTo($card)
            var $skillBlock = $('<div>').addClass("skill-block border-bottom border-danger").appendTo($card)
            var $abilityBlock = $('<div>').addClass("ability-block border-bottom border-danger").appendTo($card)
            var $actionBlock = $('<div>').addClass("action-block border-bottom border-danger").appendTo($card)
            var $reactionBlock = $('<div>').addClass("reaction-block border-bottom border-danger").appendTo($card)
            
            var parseAbilities = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("abilities edit")
                        .appendTo($abilityBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var abilityName =  arr[j].name
                    var abilityDescription = arr[j].desc

                    $('<div>')
                        .text(abilityName)
                        .addClass("ability-name" + [i]+[j] + " bold inline edit")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .text(abilityDescription)
                        .addClass("ability-desc" + [i]+[j] + " inline edit")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .appendTo($abilityBlock)
                        .addClass("mt-2")
                }
            }

            var parseActions = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("actions edit")
                        .appendTo($actionBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var actionName =  arr[j].name
                    var actionDescription = arr[j].desc

                    $('<div>')
                        .text(actionName)
                        .addClass("action-name" + [i]+[j] + " bold inline edit")
                        .appendTo($actionBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($actionBlock)
                    $('<div>')
                        .text(actionDescription)
                        .addClass("action-desc" + [i]+[j] + " inline edit")
                        .appendTo($actionBlock)
                    $('<div>')
                        .appendTo($actionBlock)
                        .addClass("mt-2")
                }
            }

            var parseReactions = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("reactions edit")
                        .appendTo($reactionBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var reactionName =  arr[j].name
                    var reactionDescription = arr[j].desc

                    $('<div>')
                        .text(reactionName)
                        .addClass("reaction-name" + [i]+[j] + " bold inline edit")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .text(reactionDescription)
                        .addClass("reaction-desc" + [i]+[j] + " inline edit")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .appendTo($reactionBlock)
                        .addClass("mt-2")
                }
            }

            // nameBlock elements
            $('<h2>')
                .text(name)
                .addClass("name edit")
                .appendTo($nameBlock);
            $('<div>')
                .text(size)
                .addClass("size sta inline edit")
                .attr('id', 'size' + [i])
                .appendTo($nameBlock);
            $('<div>')
                .text(" ")
                .addClass("inline")
                .appendTo($nameBlock);
            $('<div>')
                .text(type)
                .addClass("type sta inline edit")
                .appendTo($nameBlock);
            $('<div>')
                .text(', ')
                .addClass("inline")
                .appendTo($nameBlock);
            $('<div>')
                .text(alignment)
                .addClass("alignment sta inline edit")
                .appendTo($nameBlock);

            // stat block elements
            // Armor Class
            $('<div>')
                .addClass("inline bold")
                .text("Armor Class ")
                .appendTo($statBlock)
            $('<div>')
                .text(armorClass)
                .addClass("armor-class inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(' (')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .text(armorDescription)
                .addClass("armor-desc inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(')')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .appendTo($statBlock)
            
            // Hit Points
            $('<div>')
                .text("Hit Points ")
                .addClass("bold inline")
                .appendTo($statBlock)
            $('<div>')
                .text(hitPoints)
                .addClass("hit-ponts inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(' (')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .text(hitDice)
                .addClass("hit-dice inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(')')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .appendTo($statBlock)
            
            // speed (Need to parse by key value pairs instead of deObjectify lol)
            $('<div>')
                .addClass("inline bold")
                .text("Speed ")
                .appendTo($statBlock)
            $('<div>')
                .text(speed)
                .addClass("speed inline edit")
                .appendTo($statBlock)

            // abilityScoreBlock table elements
            $('<tr>')
                .attr('id', 'tr1' + [i])
                .appendTo($abilityScoreBlock)
            $('<tr>')
                .attr('id', 'tr2' + [i])
                .appendTo($abilityScoreBlock)
            $('<th>')
                .text('STR')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('DEX')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('CON')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('INT')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('WIS')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('CHA')
                .appendTo($('#tr1' + [i]))
            $('<td>')
                .text(STR)
                .addClass("str edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(DEX)
                .addClass("dex edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(CON)
                .addClass("con edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(INT)
                .addClass("int edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(WIS)
                .addClass("wis edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(CHA)
                .addClass("cha edit")
                .appendTo($('#tr2' + [i]))

            // skill block elements
            // need to parse saving throws as individual throws for editing and saving. NO DEOBJECTIFY
            $('<div>')
                .addClass("bold inline")
                .text("Saving Throws ")
                .appendTo($skillBlock)
            $('<div>')
                .text(savingThrows)
                .addClass('saving-throws edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            $('<div>')
                .addClass("bold inline")
                .text("Skills ")
                .appendTo($skillBlock)
            $('<div>')
                .text(skills)
                .addClass('skills edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            // Need to de-deObjectify skills...
            $('<div>')
                .addClass("bold inline")
                .text("Senses ")
                .appendTo($skillBlock)
            $('<div>')
                .text(senses)
                .addClass('senses edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)
            
            $('<div>')
                .addClass("bold inline")
                .text("Languages ")
                .appendTo($skillBlock)
            $('<div>')
                .text(languages)
                .addClass('languages edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            $('<div>')
                .addClass("bold inline")
                .text("Challenge ")
                .appendTo($skillBlock)
            $('<div>')
                .text(challenge)
                .addClass('challenge edit inline')
                .appendTo($skillBlock)
            
            
            // abilityBlock elements
            parseAbilities(abilities);

            // actionsBlock elements
            $('<h3>')
                .text("Actions")
                .addClass("border-bottom border-danger")
                .appendTo($actionBlock)
            parseActions(actions);

            // reactionsBlock elements
            $('<h3>')
                .text("Reactions")
                .addClass("border-bottom border-danger")
                .appendTo($reactionBlock)
            parseReactions(reactions);
        }
    });
}

var elementType = ''

$(document).on("click", ".edit", async function() {
    $(this).removeClass("edit")

    var type = $(this)
        .prop('nodeName')
    
    var text = $(this)
        .text()
        .trim();

    var id = $(this)
        .attr("id");
    
    var classLabel = $(this)
        .attr("class");

    var textInput = $("<textarea>")
        .addClass(classLabel + " block w100")
        .attr('id', id)
        .val(text)
    
    $(this).replaceWith(textInput);

    textInput.trigger("focus")
    elementType = type;
    return type;
});

$(document).on("blur", "textarea", function() {
    $(this)
        .removeClass('block w100')
        .addClass('edit')

    var text = $(this)
        .val();

    var id = $(this)
        .attr('id')

    var classLabel = $(this)
        .attr('class')

    var $tag = $('<' + elementType + '>')
        .addClass(classLabel)
        .attr('id', id)
        .text(text);

    $(this).replaceWith($tag);
})

getApi();