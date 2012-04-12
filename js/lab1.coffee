#!/usr/bin/env coffee
countdown = (count) ->
    bottle = (location) ->
        locationstr = if location then 'on yhe wall' else ''
        bottlestr = if count is 1 then 'bottle' else 'bottles'
        console.log "#{count} #{bottlestr} of beer #{locationstr}"
    decrement = ->
        console.log "Take one down, pass it around"
        count--
    bottlecount true; bottlecount false
    decrement(); bottlecount true
    if count isnt 0 then countdown count
        
# Type here!

obj = null 
initializeObj = ->
  obj = 5 # create object with superpowers window.onload = initializeObj
window.onload = initializeObj

setName = (name) -> @name = name

cat = {}
cat.setName = setName
cat.setName 'Mittens'
console.log cat.name # 'Mittens'

pig = {}
setName.apply pig, ['Babe'] 
console.log 
pig.name # 'Babe'

confirm 'shall we, the?', (answer) -> show answer

current = 0
while current <= 12
   show current
   current = current + 2 
   
   
horse = {}
cat.setName.apply horse, ['Mr. Ed'] 
console.log horse.name # 'Mr. Ed'


callback = (message) => @voicemail.push message

$('#clickToHide').click -> $(this).hide()

a = b?.property ? c # good