load "base.gnuplot"

# Set a title and Y label. The X label is obviously months, so we don't set it.
#set title "The number of Request by Content-Type" font ",14" tc rgb "#606060"
set ylabel "Nb Requests"

# Manual set the Y-axis range
# set yrange [100000 to 300000]

set output "requestByContentType.pdf"
plot "requestByContentType.dat" using 2:xticlabels(1) with boxes lt rgb "#406090"





#set title "The Number of Occurrence of each Error" font ",14" tc rgb "#606060"
set ylabel "Nb Errors"
set output "nbException.pdf"
plot "nbException.dat" using 2:xticlabels(1) with boxes lt rgb "#406090"





set xtics nomirror rotate by 0

set style data boxplot

#set title "The number of JavaScript File per Page" font ",14" tc rgb "#606060"
set ylabel "Nb JavaScript Files"
set xlabel "Nb Pages"

set yrange [0 to 130]
set xrange [0 to 280]
set output "requestsPerPage.pdf"
plot "requestsPerPage.dat" using 2:xticlabels(1) with boxes lt rgb "#406090"