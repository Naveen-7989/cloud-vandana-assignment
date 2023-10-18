package roman_numbers;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class converting_to_integers {

	public static void main(String[] args) {
		
		        try (Scanner scanner = new Scanner(System.in)) {
					System.out.print("Enter a Roman Numeral: ");
					String roman = scanner.nextLine();

					int result = romanToInt(roman);
					System.out.println("Roman Numeral: " + roman);
					System.out.println("Integer Value: " + result);
				}
		    }

		    public static int romanToInt(String s) {
		        Map<Character, Integer> romanMap = new HashMap<>();
		        romanMap.put('I', 1);
		        romanMap.put('V', 5);
		        romanMap.put('X', 10);
		        romanMap.put('L', 50);
		        romanMap.put('C', 100);
		        romanMap.put('D', 500);
		        romanMap.put('M', 1000);

		        int result = 0;
		        int prevValue = 0;

		        for (int i = s.length() - 1; i >= 0; i--) {
		            char current = s.charAt(i);
		            int currentValue = romanMap.get(current);

		            if (currentValue < prevValue) {
		                result -= currentValue;
		            } else {
		                result += currentValue;
		            }

		            prevValue = currentValue;
		        }

		        return result;
		    }

	}

