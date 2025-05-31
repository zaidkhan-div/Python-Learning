
import asyncio
import time

start_time=time.time()
async def my_fun(n:int)->None:
    time.sleep(n)
    print(n)

def dashboard():
    print("dashboard")

async def main():
    result = await asyncio.gather(
        my_fun(3),
     
        my_fun(4),
        my_fun(5)
    )

    dashboard()

end_time=time.time()



asyncio.run(main())
print(start_time-end_time)

