/**
 * @module bs-html-injector.options
 * Default configuration. Everything here can be overridden
 */
module.exports = {
    /**
     *
     * Define which tags are ignored by default.
     *
     * @property excludedTags
     * @type Array
     * @default ["HTML", "HEAD"]
     */
    excludedTags: ["HTML", "HEAD"],
    /**
     * Log Level (inherits from browserSync initially, but can be overridden)
     */
    logLevel: undefined,
    /**
     * Handoff - when plugin is disabled, should the file-watching be handed
     * off to core?
     */
    handoff: true,
    /**
     * Narrow down the working target
     */
    restrictions: [],
    /**
     * Time to wait in ms before injecting content after file change event.
     * Used to buffer file change events in order to not trigger a reload.
     */
    timeout: 1000
};
