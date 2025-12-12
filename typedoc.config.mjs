// @ts-nocheck

/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
export default {
    $schema: "https://typedoc-plugin-markdown.org/schema.json",
    plugin: ["typedoc-plugin-markdown"],
    out: "docs",
    entryPoints: ["src/index.ts"],
    parametersFormat: "table",
    expandObjects: true,
    indexFormat: "table",
    interfacePropertiesFormat: "table",
    classPropertiesFormat: "list",
    typeAliasPropertiesFormat: "table",
    enumMembersFormat: "table",
};
