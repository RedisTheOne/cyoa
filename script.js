// Vars
var strengthPoints = document.querySelector('.strength-pt').value
var endurancePoints = document.querySelector('.endurance-pt').value
var dexterityPoints = document.querySelector('.dexterity-pt').value
var agilityPoints = document.querySelector('.agility-pt').value
var magicPoints = document.querySelector('.magic-pt').value
var points = 20
var power = 0
var weight = 0
points = points - strengthPoints - endurancePoints - dexterityPoints - agilityPoints - magicPoints

var kActive = 0
var rActive = 0
var tActive = 0
var dActive = 0
var mActive = 0
var bActive = 0



/***************
 * Functions
 * *************/


//For every point risen in the input fields it is taken from the total points
function getPoints() {

    if (points > 0) {
        var newStrengthPoints = document.querySelector('.strength-pt').value
        var newEndurancePoints = document.querySelector('.endurance-pt').value
        var newDexterityPoints = document.querySelector('.dexterity-pt').value
        var newAgilityPoints = document.querySelector('.agility-pt').value
        var newMagicPoints = document.querySelector('.magic-pt').value

        points = points - (newStrengthPoints - strengthPoints) - (newEndurancePoints - endurancePoints) - (newDexterityPoints - dexterityPoints) - (newAgilityPoints - agilityPoints) - (newMagicPoints - magicPoints)

        strengthPoints = newStrengthPoints
        endurancePoints = newEndurancePoints
        dexterityPoints = newDexterityPoints
        agilityPoints = newAgilityPoints
        magicPoints = newMagicPoints
    } else {
        alert("You have spend all your points")
        document.querySelector('.strength-pt').value = strengthPoints
        document.querySelector('.endurance-pt').value = endurancePoints
        document.querySelector('.dexterity-pt').value = dexterityPoints
        document.querySelector('.agility-pt').value = agilityPoints
        document.querySelector('.magic-pt').value = magicPoints
        points = 0
        return
    }

}


//Updates the stats according to the class assigned to the button

var classChoosen = false;

document.querySelector('#knight').addEventListener("change", function () {
    if (this.checked) {
        if (points < 4) {
            alert("You dont have enough points for that")
            this.checked = false
            return
        }
        var classText = String("<div>Strength: " + strengthPoints * 1.5 + "</div><div>Endurance: " + endurancePoints * 1.5 + "</div><div>Dexterity: " + dexterityPoints + "</div><div>Agility: " + agilityPoints * 1.5 + "</div><div>Magic: " + magicPoints + "</div>")
        document.querySelector('.class-stats').innerHTML = classText
        if(!document.querySelector('.class-stats').style.opacity)
            document.querySelector('.class-stats').style.opacity = '1'
        if (!classChoosen) {
            points -= 4
        } else { points = points }
        classChoosen = true;
    }
})

document.querySelector('#rouge').addEventListener("change", function () {
    if (document.querySelector('#rouge').checked) {
        if (points < 4) {
            alert("You dont have enough points for that")
            this.checked = false
            return
        }
        var classText = String("<div>Strength: " + strengthPoints * 1.5 + "</div><div>Endurance: " + endurancePoints * 1.5 + "</div><div>Dexterity: " + dexterityPoints + "</div><div>Agility: " + agilityPoints * 1.5 + "</div><div>Magic: " + magicPoints + "</div>")
        document.querySelector('.class-stats').innerHTML = classText
        if(!document.querySelector('.class-stats').style.opacity)
            document.querySelector('.class-stats').style.opacity = '1'
        if (!classChoosen) {
            points -= 4
        } else { points = points }
        classChoosen = true;
    }
})

document.querySelector('#tank').addEventListener("change", function () {
    if (document.querySelector('#tank').checked) {
        if (points < 4) {
            alert("You dont have enough points for that")
            this.checked = false
            return
        }
        var classText = String("<div>Strength: " + strengthPoints * 1.5 + "</div><div>Endurance: " + endurancePoints * 1.5 + "</div><div>Dexterity: " + dexterityPoints + "</div><div>Agility: " + agilityPoints * 1.5 + "</div><div>Magic: " + magicPoints + "</div>")
        document.querySelector('.class-stats').innerHTML = classText
        if(!document.querySelector('.class-stats').style.opacity)
            document.querySelector('.class-stats').style.opacity = '1'
        if (!classChoosen) {
            points -= 4
        } else { points = points }
        classChoosen = true;
    }
})

document.querySelector('#duelist').addEventListener("change", function () {
    if (document.querySelector('#duelist').checked) {
        if (points < 4) {
            alert("You dont have enough points for that")
            this.checked = false
            return
        }
        var classText = String("<div>Strength: " + strengthPoints * 1.5 + "</div><div>Endurance: " + endurancePoints * 1.5 + "</div><div>Dexterity: " + dexterityPoints + "</div><div>Agility: " + agilityPoints * 1.5 + "</div><div>Magic: " + magicPoints + "</div>")
        document.querySelector('.class-stats').innerHTML = classText
        if(!document.querySelector('.class-stats').style.opacity)
            document.querySelector('.class-stats').style.opacity = '1'
        if (!classChoosen) {
            points -= 4
        } else { points = points }
        classChoosen = true;
    }
})

document.querySelector('#mage').addEventListener("change", function () {
    if (document.querySelector('#mage').checked) {
        if (points < 4) {
            alert("You dont have enough points for that")
            this.checked = false
            return
        }
        var classText = String("<div>Strength: " + strengthPoints * 1.5 + "</div><div>Endurance: " + endurancePoints * 1.5 + "</div><div>Dexterity: " + dexterityPoints + "</div><div>Agility: " + agilityPoints * 1.5 + "</div><div>Magic: " + magicPoints + "</div>")
        document.querySelector('.class-stats').innerHTML = classText
        if(!document.querySelector('.class-stats').style.opacity)
            document.querySelector('.class-stats').style.opacity = '1'
        if (!classChoosen) {
            points -= 4
        } else { points = points }
        classChoosen = true;
    }
})

document.querySelector('#berserker').addEventListener("change", function () {
    if (document.querySelector('#berserker').checked) {
        if (points < 4) {
            alert("You dont have enough points for that")
            this.checked = false
            return
        }
        var classText = String("<div>Strength: " + strengthPoints * 1.5 + "</div><div>Endurance: " + endurancePoints * 1.5 + "</div><div>Dexterity: " + dexterityPoints + "</div><div>Agility: " + agilityPoints * 1.5 + "</div><div>Magic: " + magicPoints + "</div>")
        document.querySelector('.class-stats').innerHTML = classText
        if(!document.querySelector('.class-stats').style.opacity)
            document.querySelector('.class-stats').style.opacity = '1'
        if (!classChoosen) {
            points -= 4
        } else { points = points }
        classChoosen = true;
    }
})

// CONFIRMS STATS

function finalStats() {
    if (!classChoosen) {
        alert("Choose a class first!")
        return
    }
    if (document.querySelector('#knight').checked) {
        if (kActive == 0) {
            strengthPoints *= 1.5
            endurancePoints *= 1.5
            dexterityPoints *= 1
            agilityPoints *= 1.5
            magicPoints *= 1

            kActive = 1
        }

    }
    else if (document.querySelector('#rouge').checked) {
        if (rActive == 0) {
            strengthPoints *= 1
            endurancePoints *= 1
            dexterityPoints *= 1.5
            agilityPoints *= 2
            magicPoints *= 1

            rActive = 1
        }

    }
    else if (document.querySelector('#tank').checked) {
        if (tActive == 0) {
            strengthPoints *= 1
            endurancePoints *= 2.5
            dexterityPoints *= 1
            agilityPoints *= 1
            magicPoints *= 1

            tActive = 1
        }

    }
    else if (document.querySelector('#duelist').checked) {
        if (dActive == 0) {
            strengthPoints *= 1
            endurancePoints *= 1
            dexterityPoints *= 2
            agilityPoints *= 1.5
            magicPoints *= 1

            dActive = 1
        }

    }
    else if (document.querySelector('#mage').checked) {
        if (mActive == 0) {
            strengthPoints *= 1
            endurancePoints *= 1
            dexterityPoints *= 1
            agilityPoints *= 1
            magicPoints *= 2.5

            mActive = 1
        }

    }
    else if (document.querySelector('#berserker').checked) {
        if (bActive == 0) {
            strengthPoints *= 2
            endurancePoints *= 1.5
            dexterityPoints *= 1
            agilityPoints *= 1
            magicPoints *= 1

            bActive = 1
        }

    }
}

document.querySelector('#wLM').addEventListener('click', function () {
    finalStats()
    var weightLimit = strengthPoints * 4
    document.querySelector('#wLM').innerHTML = "Weight limit: " + weightLimit;
})

///////////////////////////////////
// if (magicPoints < 2) {
//     alert("You need 2 or more Magic")
//     this.checked = false
//     power -= 3
//     weight -= 6
// }


document.querySelector('#broadsword').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 3
        weight += 6

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 3
            weight -= 6
            return
        }

    }
    else {
        power -= 3
        weight -= 6
    }
})

document.querySelector('#crossbow').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 3
        weight += 8

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 3
            weight -= 8
            return
        }

    }
    else {
        power -= 3
        weight -= 8
    }
})

document.querySelector('#rapier').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 2
        weight += 3

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 2
            weight -= 3
            return
        }

    }
    else {
        power -= 2
        weight -= 3
    }
})

document.querySelector('#magic-wand').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 2
        weight += 1

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 2
            weight -= 1
            return
        }

    }
    else {
        power -= 2
        weight -= 1
    }
})

document.querySelector('#magic-staff').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 4
        weight += 3

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 4
            weight -= 3
            return
        }

    }
    else {
        power -= 4
        weight -= 3
    }
})

document.querySelector('#light-armor').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 1
        weight += 4

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 1
            weight -= 4
            return
        }

    }
    else {
        power -= 1
        weight -= 4
    }
})

document.querySelector('#medium-armor').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 3
        weight += 7

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 3
            weight -= 7
            return
        }

    }
    else {
        power -= 3
        weight -= 7
    }
})

document.querySelector('#mage-robes').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 3
        weight += 2

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 3
            weight -= 2
            return
        }

    }
    else {
        power -= 3
        weight -= 2
    }
})

document.querySelector('#heavy-armor').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 5
        weight += 10

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 5
            weight -= 10
            return
        }

    }
    else {
        power -= 5
        weight -= 10
    }
})

document.querySelector('#small-shield').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 1
        weight += 3

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 1
            weight -= 3
            return
        }

    }
    else {
        power -= 1
        weight -= 3
    }
})

document.querySelector('#medium-shield').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 3
        weight += 7

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 3
            weight -= 7
            return
        }

    }
    else {
        power -= 3
        weight -= 7
    }
})

document.querySelector('#mana-shield').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 4
        weight += 0

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 4
            weight -= 0
            return
        }

    }
    else {
        power -= 4
        weight -= 0
    }
})

document.querySelector('#tower-shield').addEventListener('change', function () {
    finalStats()
    if (this.checked) {
        power += 5
        weight += 10

        if (strengthPoints * 4 < weight) {
            alert('Not enough strength')
            this.checked = false
            power -= 5
            weight -= 10
            return
        }

    }
    else {
        power -= 5
        weight -= 10
    }
})







//SUBMIT
document.querySelector('.total-pt').addEventListener('click', function () {
    setTimeout(() => {
        document.querySelector('.goBack').style.opacity = '1'
        document.querySelector('.goBack').addEventListener('click', () => window.location.reload())
    }, 1000)
    document.querySelector('body').style.overflowY = 'hidden'
    finalStats()
    var totalStats = strengthPoints + endurancePoints + dexterityPoints + agilityPoints + magicPoints
    var maxProwess = totalStats * (1 + power * 0.1)
    document.querySelector('.results').style.marginTop = '0px'
    var submitText = String("<div>Strength: " + strengthPoints + "</div><div>Endurance: " + endurancePoints + "</div><div>Dexterity: " + dexterityPoints + "</div><div>Agility: " + agilityPoints + "</div><div>Magic: " + magicPoints + "</div><div>Total stats: " + totalStats + "</div><div>Power: " + power + "</div><div>Max Prowess: " + maxProwess.toFixed(2) + "</div>")
    document.querySelector('.submit-stats').innerHTML = submitText
    document.getElementById('maxProwess').innerHTML = "Max Prowess Formula = totalStats * (1 + powers * 0.1)"
})



//keep varibles dynamic in html
setInterval(function () {
    document.querySelector('#points').innerHTML = points
    document.querySelector('#power').innerHTML = power
    document.querySelector('#weight').innerHTML = weight
}, 100)
