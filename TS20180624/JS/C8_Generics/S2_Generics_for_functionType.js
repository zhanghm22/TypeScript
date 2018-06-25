"use strict";
//The type of generic functions is just like those of non-generic functions
function identity2(arg) {
    return arg;
}
//1.
var myIdentity = identity2;
myIdentity("myString");
//2.
var myIdentity2 = identity2;
myIdentity2("myString");
var myIdentity3 = identity2;
myIdentity3("myString");
var myIdentity4 = identity2;
myIdentity4(11);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUzJfR2VuZXJpY3NfZm9yX2Z1bmN0aW9uVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0M4X0dlbmVyaWNzL1MyX0dlbmVyaWNzX2Zvcl9mdW5jdGlvblR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSxtQkFBc0IsR0FBTTtJQUN4QixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFDRCxJQUFJO0FBQ0osSUFBSSxVQUFVLEdBQXFCLFNBQVMsQ0FBQztBQUM3QyxVQUFVLENBQVMsVUFBVSxDQUFDLENBQUM7QUFDL0IsSUFBSTtBQUNKLElBQUksV0FBVyxHQUFxQixTQUFTLENBQUM7QUFDOUMsV0FBVyxDQUFTLFVBQVUsQ0FBQyxDQUFDO0FBS2hDLElBQUksV0FBVyxHQUFzQixTQUFTLENBQUM7QUFDL0MsV0FBVyxDQUFTLFVBQVUsQ0FBQyxDQUFDO0FBS2hDLElBQUksV0FBVyxHQUErQixTQUFTLENBQUM7QUFDeEQsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDIn0=