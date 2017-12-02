export function colorService() {
    let color = 'red';

    this.setColor = function(mcolor) {
        color = mcolor;
    }

    this.$get = function () {
        return {
            getColor: function() {
                return color;
            }
        };
    }
}

colorService.$inject = [];
