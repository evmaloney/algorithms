# Convert a given number to binary (w/o built in methods)

# My original rough solution
def build_binary(num, exp, binary_str = ""):
    if exp < 0:
        return int(binary_str)
    
    curr_pow = 2 ** exp
    
    if num - curr_pow >= 0:
        binary_str += "1"
        num -= curr_pow
    else:
        binary_str += "0"
        
    return build_binary(num, exp - 1, binary_str)


def to_binary(num):
    curr_exponent = 0
    next_exponent = 0
    result = 0
    
    while result <= num:
        curr_exponent = next_exponent
        next_exponent += 1
        result = 2 ** next_exponent
        
    return build_binary(num, curr_exponent)

solution = to_binary(34)
print(solution)


# Refactored `to_binary` func
def convert_to_binary(num):
    if num == 0:
      return 0
    
    max_exp = 0
    while 2 ** max_exp <= num:
        max_exp += 1
        
    return build_binary(num, max_exp - 1)

solution = convert_to_binary(34)
print(solution)


## Slick solution I found @ https://www.programiz.com/python-programming/examples/decimal-binary-recursion
def slick_convert(num):
   if num > 1:
       slick_convert(num//2)
   print(num % 2,end = '')

slick_convert(34)
print()