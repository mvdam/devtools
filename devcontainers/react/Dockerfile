ARG NODE_VERSION="18"

FROM node:${NODE_VERSION} as builder
WORKDIR /app

RUN git clone https://github.com/mvdam/devtools.git

RUN touch all.sh

RUN cd /app/devtools/bash && cat ./common.sh >> /app/all.sh
RUN cd /app/devtools/bash && cat ./git-aliases.sh >> /app/all.sh
RUN cd /app/devtools/bash && cat ./traversal-aliases.sh >> /app/all.sh

RUN rm -rf /app/devtools

FROM node:${NODE_VERSION}

COPY --from=builder /app/all.sh .

RUN cat ./all.sh >> ~/.bashrc
RUN rm ./all.sh
