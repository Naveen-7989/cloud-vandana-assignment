package shuffling_array;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class shuffling {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 List<Integer> numbers = new ArrayList<>();
	        numbers.add(1);
	        numbers.add(2);
	        numbers.add(3);
	        numbers.add(4);
	        numbers.add(5);
	        numbers.add(6);
	        numbers.add(7);

	        // Sort the list in ascending order
	        Collections.shuffle(numbers);
	        System.out.println("Sorted List: " + numbers);

	}

}
