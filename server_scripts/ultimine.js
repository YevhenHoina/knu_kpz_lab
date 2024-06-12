// const $Registry = java("net.minecraft.core.Registry")
// let allBlocks = $Registry.BLOCK.keySet()

// onEvent("tags.blocks", (event) => {
//   const tag = event.get("ftbultimine:excluded_blocks");
//   for (let block of allBlocks) {
//     let id = block.toString();
//     if(id.endsWith("_log") || id.endsWith("_ore")) continue;
//     tag.add(id);
//   }
// });