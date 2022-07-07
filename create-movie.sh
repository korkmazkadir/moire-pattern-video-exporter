#!/bin/bash

echo "Converting svg to png..."
#convert ./movie-frames/frame-%03d.svg -resize 960x540 ./movie-frames/frame-%03d.png

convert ./movie-frames/frame-*.svg -resize 1920x1080 ./movie-frames/frame-%03d.png

echo "Creating movie..."
ffmpeg -r 20 -i ./movie-frames/frame-%03d.png -pix_fmt yuv420p -crf 0 movie.mp4


#ffmpeg -r 15 -i ./movie-frames/frame-%03d.png movie.gif
