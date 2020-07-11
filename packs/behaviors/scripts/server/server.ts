/// <reference types="minecraft-scripting-types-server" />

namespace Server {
	const system = server.registerSystem(0, 0);

	const globals = {
		firstTick: true
	};

	// Setup which events to listen for
	system.initialize = function() {
		// set up your listenToEvents and register server-side components here.
		system.listenForEvent("minecraft:entity_death", eventData => handleImDead(eventData));
	}

	system.update = function() {
		// initial setup (outside of event listeners and initialize commands)
		if (globals.firstTick == true) {
			system.executeCommand("/gamerule sendcommandfeedback false", (callback) => {
				server.log("Could not set gamerules for sendCommandFeedback" + JSON.stringify(callback));
			});
		}
	}

	let handleImDead = function(eventData : IEventData<IEntityDeathEventData>) {
		if (eventData.data.entity.__identifier__ == "minecraft:player") {
			let chatData : IEventData<IDisplayChatParameters> = 
				system.createEventData<IDisplayChatParameters>("minecraft:display_chat_event");

			const positionComponent : IComponent<IPositionComponent> = 
				system.getComponent<IPositionComponent>(eventData.data.entity, "minecraft:position");
			
			if (positionComponent.data) {
				chatData.data.message = "Free loot at: " + 
					Math.floor(positionComponent.data.x) + ", " + 
					Math.floor(positionComponent.data.y) + ", " + 
					Math.floor(positionComponent.data.z) + " but be quick!!";
				system.broadcastEvent("minecraft:display_chat_event", chatData);
			}
		}
	}
}
