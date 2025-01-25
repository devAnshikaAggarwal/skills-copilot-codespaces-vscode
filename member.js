function skillsMember() 
{
    var member = function() {
        // private
        var name = "John";
        var age = 25;

        // public
        var obj = {
            setName: function(n) {
                name = n;
                return obj;
            },
            setAge: function(a) {
                age = a;
                return obj;
            },
            getName: function() {
                return name;
            },
            getAge: function() {
                return age;
            }
        };

        return obj;
    };

    return member;
}