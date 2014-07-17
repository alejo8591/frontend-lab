module.exports = function(grunt){

	grunt.initConfig({
		compass: {                  // Task
    		dist: {                   // Target
      		options: {              // Target options
        		sassDir: 'dev/css/sass',
        		cssDir: 'dist/css',
        		environment: 'production'
      		}
    		},
    		dev: {                    // Another target
      		options: {
        		sassDir: 'dev/css/sass',
        		cssDir: 'dist/css'
      		}
    		}
  		},
  		watch: {
      		compass: {
        		files: "/dev/css/sass/*.scss",
        		tasks: ['default']
      		}
    	}
	});
	
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask("default", [ "compass", "watch:compass" ]);
}