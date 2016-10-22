QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1<=1 successs");
});

QUnit.test('testing the new sub function with two sets of inputs',function(assert)){
	assert.equal(App.sub(2,2),0,"works with two poitive integers");
	assert.equal(App.sub(3.5,1.2),2.3,"works with two positive real numbers");

});
QUnit.test("Number checker",function(assert){
	assert.strictEqual(checker.checkNumber(2),"right","When positive");
	assert.strictEqual(checker.checkNumber(-2),"Number cannot be negative");
	assert.strictEqual(checker.checkNumber(""),"Number cannot be empty");
	assert.strictEqual(checker.checkNumber("ext"),"Number cannot be string");
	assert.strictEqual(checker.checkNumber("3"),"right","When positive");
});