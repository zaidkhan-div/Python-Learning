# Grade system using logical operator 

percentage_input = int(input('Enter Your Percentage '))

percentage = percentage_input

if percentage >=90 and percentage<=100:
    print(f'A+ grade in class with {percentage}%')
elif percentage>=80 and percentage<=100:
    print('A Grade in class')
elif percentage>=70 and percentage<=100:
    print('B grade in the class')
elif percentage>=50 and percentage<=100:
    print('D grade in the class')
elif percentage<50 and percentage<=100:
    print('you are failed Try again')
else:
    print('Invalid number')

