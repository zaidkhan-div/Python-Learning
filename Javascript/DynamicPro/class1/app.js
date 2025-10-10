function permutations(str) {
  // Base case: if string has only 1 character, return it in an array
  if (str.length <= 1) return [str];
  
  const result = new Set(); // Use Set to automatically remove duplicates
  
  // For each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];
    
    // Get remaining characters (everything except current char)
    const remaining = str.slice(0, i) + str.slice(i + 1);
    
    // Recursively get all permutations of remaining characters
    const perms = permutations(remaining);
    
    // Add current character to the front of each permutation
    for (let perm of perms) {
      result.add(char + perm);
    }
  }
  
  return Array.from(result);
}

// Test cases
console.log(permutations('a'));      // ['a']
console.log(permutations('ab'));     // ['ab', 'ba']
console.log(permutations('abc'));    // ['abc','acb','bac','bca','cab','cba']
console.log(permutations('aabb')); 