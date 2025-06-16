# modules 
with open("note.txt",'w') as file: # w => write this will remove the previous content
    file.write("hello world")
    
with open("note.text","r") as file1: # r => read
    print(file1.read())

with open("note.txt", "w") as file2: # as this is only write mode "w"; So we can't read here
    print(file2.read()) 
    file2.write("Here we can't read and write in one mode")

with open("note.txt", "w+") as file3: # in this case we can read & write with "w+" & "r+"
    file2.write("We can write here")
    print(file2.read()) # also we can read this
    
with open("new.txt" "w+") as file3: # if the file does'nt exist this will creat and we can read and write both but with "r+" we can create file but can't write 
    file3.write("Hello World")
    file3.seek(0) # seek method use to set the cursor 
    print(file3.read())

with open("new.txt" "a") as file4: # "a" mode represent append
    file4.write('this will be appended') # the "a" the mode append data and does not remove the previous content 
    


