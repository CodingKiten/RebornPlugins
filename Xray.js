(function () {
  var targets = [
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
    "chest",
    "ender_chest",
    "portal",
  ];

  var allBlocks = Object.keys(PluginAPI.blocks);

  function update() {
    allBlocks.forEach(block => {
      if (targets.includes(block)) {
        PluginAPI.blocks[block].forceRender = true;
        PluginAPI.blocks[block].reload();
      } else if (PluginAPI.blocks[block] && "noRender" in PluginAPI.blocks[block]) {
        PluginAPI.blocks[block].noRender = true;
        PluginAPI.blocks[block].reload();
      }
    });
  }

  update();
})();
