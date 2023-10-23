(function () {
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
      if (xrayBlocks.includes(block)) {
        PluginAPI.blocks[block].forceRender = true;
        PluginAPI.blocks[block].reload();
      }
    });
  }

  PluginAPI.addEventListener("levelload", function () {
    update();
  });
})();
