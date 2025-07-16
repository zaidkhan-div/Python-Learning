# Python has mainly 5 DataTypes 

# 1.Numeric -> 1.Integer 2.float 3.Complex
# 2.Dictionary
# 3.Boolean
# 4.Set
# 5.Sequence Type

# ================== 1.Types of Numeric  a.Integer ============= #

# Whole numbers, positive or negative, without decimals.
num_int: int = 10.39

# b.Floating-Point (float)
# Numbers with decimal points.
num_float: int = 13.4

# c.Complex 
# Numbers with a real and imaginary part.
num_Complex: int = 2+3j

# Accessing Real and Imaginary Parts

# print(num_Complex.real) 
# print(num_Complex.imag) 

# ================== 2.Boolean =================== #
# 2.Boolean Represents True or False.
is_python_fun: bool = True #False 

# ================= 3.Sequence Types ========== #
# These store multiple items in an ordered way.

# a. String (str) A sequence of characters enclosed in quotes.
text_double: str  = "Hello, Python!" # Strings with Double Quotes (")
text_single: str  = 'Hello, Python!' # Strings with Single Quotes (')
text_multi: str   = '''Hello, Python!''' # Multi-Line Strings with Triple Quotes (''' or """)
text_multi_1: str = """Hello, Python!""" # Multi-Line Strings with Triple Quotes (''' or """)

print(type(text_double), " text_double   = ", text_double)    # 
print(type(text_single), " text_single   = ", text_single)    # 
print(type(text_multi), " text_multi    = ", text_multi)      # 
print(type(text_multi_1), " text_multi_1  = ", text_multi_1)  # 

# Double Quotes ("): Use when the string contains single quotes.
# Single Quotes ('): Use when the string contains double quotes.
# Triple Quotes (''' or """): Use for multi-line strings or docstrings.

# b. List (list) An ordered, mutable collection.
my_list_1: int = [1, 2, 3, "Java", 3.14, True] #Type hinting is not enforced in python, but you should mention appropriate data type in this case 'list'
my_list: list = [1, 2, 3, "Python", 3.14, 3+2j]

print(type(my_list_1))
print(type(my_list))

# c. Tuple (tuple) An ordered, immutable collection.

my_tuple: tuple = (1, 2, 3, "AI", 2.71, False, .3 , 3+2j )
print(type(my_tuple), " my_tuple = ", my_tuple )  # 

     
# ============ 4.Dictionary Dictionary (dict) Stores key-value pairs. =============

my_dict: dict = {"name": "Alice", "age": 25, "language": "Python"}
print(type(my_dict))

# =================== 5 Set ================= #
# 5. Set Unordered collections with unique elements.
# Mutable, unordered, and contains unique values.
my_set: set = {1, 2, 33, 4, 4, 5}
 
# b. Frozen Set (frozenset) Immutable version of a set.
frozen_set = frozenset([11, 2, 3, 4, 4, 5])

 