const LinkedListNode = require('../LinkedListNode');

const node = new LinkedListNode(1, null);
console.log(node);

// Operations that an Array can do
describe("LinkedListNode", function () {
    it("should not be undefined", () => {
        expect(node).not.toBeUndefined();
    });

    describe("LinkedList attributes", function () {
        it("should have a data attribute", () => {
            expect(node).toHaveProperty(node.data);
        });

        it("should have a next attribute", () => {
            expect(node).toHaveProperty(node.next);
        });
    });

});