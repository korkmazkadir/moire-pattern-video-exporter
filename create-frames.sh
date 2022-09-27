#!/bin/bash

frames=$(jq -c '.frameData[]' ./movie-frames/frames.json)
frame_index=1


#jq -c '.frameData[]' ./movie-frames/frames.json | while read frame; do
#   frame=$(echo "$frame" | sed -r 's/^"|"$//g' )
#   echo "pricessing $frame_index"
#   echo $frame > `printf "./movie-frames/frame-%03d.svg" $frame_index`
#   frame_index=$((frame_index + 1))
#done


jq -c '.frameData[]' ./movie-frames/frames.json | while read frame; do
   frame=$(echo "$frame" | sed -r 's/^"|"$//g' )
   echo "processing $frame_index"
   #echo $frame | rsvg-convert -h 1080 -w 1920 -b "#ffe4c4" > `printf "./movie-frames/frame-%03d.png" $frame_index`
   echo $frame | rsvg-convert -h 540 -w 960 -b "#ffe4c4" > `printf "./movie-frames/frame-%03d.png" $frame_index`
   

   if [ "$frame_index" -eq 100 ]; then
      break
   fi

   frame_index=$((frame_index + 1))

done