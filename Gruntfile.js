module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      deploy: {
        command: "git subtree push --prefix public origin gh-pages"
      },
      asciidoc: {
        command: "asciidoc -b html5 -o index.html -a linkcss -a stylesheet=tufte.css st33n.adoc"
      }
    },
    watch: {
      asciidoc: {
        files: [ '*.conf', '*.adoc', '*.js' ],
        tasks: ['shell:asciidoc']
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('deploy', ['shell:deploy']);
  grunt.registerTask('default', ['shell:asciidoc', 'watch']);

};

