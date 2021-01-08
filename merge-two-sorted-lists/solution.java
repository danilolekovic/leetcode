/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode tempNode = new ListNode(0);
        ListNode currentNode = tempNode;
        
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                currentNode.next = l1;
                l1 = l1.next;
            } else {
                currentNode.next = l2;
                l2 = l2.next;
            }
            
            currentNode = currentNode.next;
        }
        
        if (l1 != null) {
            currentNode.next = l1;
            l1 = l1.next;
        }
        
        if (l2 != null) {
            currentNode.next = l2;
            l2 = l2.next;
        }
        
        return tempNode.next;
    }
}
