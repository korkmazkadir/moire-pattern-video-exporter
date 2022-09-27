# moire-pattern-video-exporter
An experimental moire pattern creator.

# How to use it

1) Run index.html

    It will produce a JSON file, and it will try to download the file. The JSON file contains the svg frames of the video. By default, it will create 100 frames, and this behavior can be change by changing the value of constant defined in index.html. The name of the constant is ***numberOfFrames***.


2) Move the downloaded JSON file under ./movie-frames folder.

    If there is any other json file, remove it

3) Run create-frames.sh script.

    This script will export svg frames into png files.


4) Finally, run create-movie.sh script.

    This script will combine png files to create a mp4 movie. The movie is saved under the root folder of the project. You can change the quality of video by editing create-movie.sh file.


The project depends on following binaries. You should install them:
* jq
* convert
* ffmpeg

