module.exports = function (grunt){
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            files: ['CSS/*.scss'],
            tasks: ['css'],
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: ['*.css','*.html','*.js'] 
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './' 
                    }
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default',['browserSync', 'watch'])

};