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


function getApi() {
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


                    var $card = $('<div>').attr('id', [i]).addClass("border p-3 my-3 mx-3 col-10 col-md-8 col-lg-4").appendTo($container)
                    var $nameBlock = $('<div>').addClass("name-block border-bottom border-danger").appendTo($card)
                    var $statBlock = $('<div>').addClass("stat-block border-bottom border-danger").appendTo($card)
                    var $abilityScoreBlock = $('<div>').addClass("ability-table border-bottom border-danger").appendTo($card)
                    var $skillBlock = $('<div>').addClass("skill-block border-bottom border-danger").appendTo($card)
                    var $abilityBlock = $('<div>').addClass("ability-block border-bottom border-danger").appendTo($card)
                    var $actionBlock = $('<div>').addClass("action-block border-bottom border-danger").appendTo($card)
                    var $reactionBlock = $('<div>').addClass("reaction-block border-bottom border-danger").appendTo($card)

                    var parseAbilities = function(arr) {
                        if (!arr) {
                            $("<div>")
                                .text("None")
                                .appendTo($abilityBlock)
                        }
                        for (j = 0; j < arr.length; j++) {
                            var abilityName =  arr[j].name
                            var abilityDescription = arr[j].desc
                            $('<div>')
                                .attr('id', 'ability' + [i]+[j])
                                .addClass('mb-2')
                                .text(abilityDescription)
                                .appendTo($abilityBlock)
                                
                            $('<span class="bold">')
                                .text(abilityName + " ")
                                .prependTo($('#ability' + [i]+[j]))
                        }
                    }

                    var parseActions = function(arr) {
                        if (!arr) {
                            $("<div>")
                                .text("None")
                                .appendTo($actionBlock)
                        }
                        for (j = 0; j < arr.length; j++) {
                            var actionName =  arr[j].name
                            var actionDescription = arr[j].desc

                            $('<div>')
                                .attr('id', 'action' + [i]+[j])
                                .addClass('mb-2')
                                .text(actionDescription)
                                .appendTo($actionBlock)
                            $('<span class="bold">')
                                .text(actionName + " ")
                                .prependTo($('#action' + [i]+[j]))
                        }
                    }

                    var parseReactions = function(arr) {
                        if (!arr) {
                            $("<div>")
                                .text("None")
                                .appendTo($reactionBlock)
                        }
                        for (j = 0; j < arr.length; j++) {
                            var reactionName =  arr[j].name
                            var reactionDescription = arr[j].desc
                            $('<div>')
                                .attr('id', 'reaction' + [i]+[j])
                                .addClass('mb-2')
                                .text(reactionDescription)
                                .appendTo($reactionBlock)
                            $('<span class="bold">')
                                .text(reactionName + " ")
                                .prependTo($('#reaction' + [i]+[j]))
                        }
                    }


                    $('<h2>')
                        .text(name)
                        .appendTo($nameBlock);
                    $('<div>')
                        .text(size + " " + type + ", " + alignment)
                        .prepend()
                        .appendTo($nameBlock);
                    $('<div>')
                        .attr('id', 'armor' + [i])
                        .text(armorClass + ' (' + armorDescription +')')
                        .appendTo($statBlock)
                    $('<span class="bold">')
                        .text("Armor Class ")
                        .prependTo($('#armor' + [i]))
                    $('<div>')    
                        .attr('id', 'hp' + [i])
                        .text(hitPoints + ' (' + hitDice + ')')
                        .appendTo($statBlock)
                    $('<span class="bold">')
                        .text("Hit Points ")
                        .prependTo($('#hp' + [i]))
                    $('<div>')
                        .attr('id', 'speed' + [i])
                        .text(speed)
                        .appendTo($statBlock)
                    $('<span class="bold">')
                        .text("Speed ")
                        .prependTo('#speed' + [i])
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
                        .appendTo($('#tr2' + [i]))
                    $('<td>')
                        .text(DEX)
                        .appendTo($('#tr2' + [i]))
                    $('<td>')
                        .text(CON)
                        .appendTo($('#tr2' + [i]))
                    $('<td>')
                        .text(INT)
                        .appendTo($('#tr2' + [i]))
                    $('<td>')
                        .text(WIS)
                        .appendTo($('#tr2' + [i]))
                    $('<td>')
                        .text(CHA)
                        .appendTo($('#tr2' + [i]))

                    // skill block elements
                    $('<div>')
                        .attr('id', 'saving-throws' + [i])
                        .text(savingThrows)
                        .appendTo($skillBlock)
                    $('<span class="bold">')
                        .text("Saving Throws ")
                        .prependTo($("#saving-throws" + [i]))

                    $('<div>')
                        .attr('id', 'skills' + [i])
                        .text(skills)
                        .appendTo($skillBlock)
                    $('<span class="bold">')
                        .text("Skills ")
                        .prependTo($("#skills" + [i]))

                    $('<div>')
                        .attr('id', 'senses' + [i])
                        .text(senses)
                        .appendTo($skillBlock)
                    $('<span class="bold">')
                        .text("Senses ")
                        .prependTo($("#senses" + [i]))

                    $('<div>')
                        .attr('id', 'languages' + [i])
                        .text(languages)
                        .appendTo($skillBlock)
                    $('<span class="bold">')
                        .text("Languages ")
                        .prependTo($("#languages" + [i]))

                    $('<div>')
                        .attr('id', 'challenge' + [i])
                        .text(challenge)
                        .appendTo($skillBlock)
                    $('<span class="bold">')
                        .text("Challenge ")
                        .prependTo($("#challenge" + [i]))
                    
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

getApi();