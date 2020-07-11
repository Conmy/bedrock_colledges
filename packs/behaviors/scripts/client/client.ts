/// <reference types="minecraft-scripting-types-client" />

namespace Client {

	class Globals {
		public firstTick: Boolean = false;
		public query: IQuery;
		public insomnia_tickCount: number = 0;
		public insomnia_tickSpeed: number = 20;
		public clientEntity: IEntity;
	}

	const system = client.registerSystem(0, 0);
	let globals: Globals = new Globals();

	// Setup which events to listen for
	system.initialize = function() {
		// set up your listenToEvents and register client-side components here.

		this.listenForEvent("minecraft:client_entered_world", (eventData) => handleEnteredWorld(eventData));
	};

	// per-tick updates
	system.update = function() {
		
		// Any logic that needs to happen every tick on the client.
		globals.insomnia_tickCount++;
		if (globals.insomnia_tickCount == globals.insomnia_tickSpeed) {
			// reset tick count
			globals.insomnia_tickCount = 0;
			
			if (globals.clientEntity) {
				// sendMessage(JSON.stringify(globals.clientEntity));
				
				// Pre check
				if (system.hasComponent(globals.clientEntity, "minecraft:position")) {
					sendMessage("He has the component");
				}
				
				let component : IComponent<unknown> = system.getComponent(globals.clientEntity, "colledges:player_data");
				if (component) {
					sendMessage("Component: " + JSON.stringify(component));
				} else {
					sendMessage("could not find compontent");
				}
			} else {
				sendMessage("No global entity stored");
			}
		}
	};

	let sendMessage = function (message: string) {
		let chatEventData : IEventData<IDisplayChatParameters> = 
			system.createEventData<IDisplayChatParameters>("minecraft:display_chat_event");
		chatEventData.data.message = message;
		system.broadcastEvent("minecraft:display_chat_event", chatEventData);
	};

	let handleEnteredWorld = function(eventData: IEventData<IClientEnteredWorldEventData>) {
		globals.clientEntity = eventData.data.player;
		sendMessage("Entered World: " + JSON.stringify(eventData.data.player));
	};
}
