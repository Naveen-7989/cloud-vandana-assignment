package panagran.one;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
			System.out.print("Enter a sentence: ");
			String sentence = scanner.nextLine();

			boolean isPangram = isPangram(sentence);
			if (isPangram) {
			    System.out.println("The sentence is a pangram.");
			} else {
			    System.out.println("The sentence is not a pangram.");
			}
		}
    }

    public static boolean isPangram(String sentence) {

        sentence = sentence.replaceAll(" ", "").toLowerCase();

        Set<Character> uniqueChars = new HashSet<>();

        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);

            if (Character.isLetter(c)) {
                uniqueChars.add(c);
            }
        }

        return uniqueChars.size() == 26;
    }
}
