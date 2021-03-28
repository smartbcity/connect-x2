FRONT_X2_DOCKERFILE	:= infra/docker/x2-web-app/Dockerfile
FRONT_X2_NAME	    	:= smartbcity/x2-web-app
FRONT_X2_IMG	    	:= ${FRONT_X2_NAME}:${VERSION}
FRONT_X2_LATEST		:= ${FRONT_X2_NAME}:latest

package: package-x2-front

push: push-x2-front

push-latest: push-latest-x2-front

package-x2-front:
	@docker build -f ${FRONT_X2_DOCKERFILE} -t ${FRONT_X2_IMG} .

push-x2-front:
	@docker push ${FRONT_X2_IMG}

push-latest-x2-front:
	@docker tag ${FRONT_X2_IMG} ${FRONT_X2_LATEST}
	@docker push ${FRONT_X2_LATEST}
