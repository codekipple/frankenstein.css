var files = {
    css: 'frankenstein.css/**/*.scss'
}

module.exports = {
    options: {
        livereload: true,
    },
    css: {
        files: [files.css],
        tasks: ['sass', 'autoprefixer']
    }
};