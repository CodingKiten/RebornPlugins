(function () {
  var xrayEnabled = false;
  var xrayBlocks = [
    "coal_block",
    "coal_ore",
    "iron_block",
    "iron_ore",
    "gold_block",
    "gold_ore",
    "diamond_block",
    "diamond_ore",
    "redstone_block",
    "redstone_ore",
    "lapis_block",
    "lapis_ore",
    "emerald_block",
    "emerald_ore",
    "nether_quartz_ore",
    "obsidian",
    "chest", // Chest
    "ender_chest", // Ender Chest
    "portal", // Portal Blocks
  ];

  function update() {
    Object.keys(PluginAPI.blocks).forEach(block => {
      if (xrayEnabled) {
        if (xrayBlocks.includes(block)) {
          PluginAPI.blocks[block].forceRender = true;
        } else {
          PluginAPI.blocks[block].forceRender = false;
        }
        PluginAPI.blocks[block].reload();
      } else {
        PluginAPI.blocks[block].forceRender = false;
        PluginAPI.blocks[block].reload();
      }
    });
  }

  function toggleXray() {
    xrayEnabled = !xrayEnabled;
    var status = xrayEnabled ? "enabled" : "disabled";
    PluginAPI.displayToChat({ msg: "X-ray mode " + status + "." });
    update();
  }

  PluginAPI.addEventListener("sendchatmessage", function (ev) {
    var message = ev.message.toLowerCase().trim();
    if (message === ".xray") {
      ev.preventDefault = true;
      toggleXray();
    }
  });

  update();
})();
