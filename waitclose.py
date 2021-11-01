import os, time

def kill():
    os.system('killall zoom')
wait_time = 60*60 + 15*60

time.sleep(wait_time)
kill()
print('Killed at: ', time.ctime())