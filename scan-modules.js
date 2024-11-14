const module = Process.findModuleByName('dash')
console.log(module.name, module.base)


for (const module of Process.enumerateModules()) {
  console.log(module.name, module.base)
}
