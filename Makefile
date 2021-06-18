FRONT_X2_DOCKERFILE	:= infra/docker/x2-web-app/Dockerfile
FRONT_X2_NAME	    := smartbcity/x2-web-app
FRONT_X2_IMG	    := ${FRONT_X2_NAME}:${VERSION}
FRONT_X2_LATEST		:= ${FRONT_X2_NAME}:latest

X2_APP_NAME	   	 	:= smartbcity/x2-gateway
X2_APP_IMG	    	:= ${X2_APP_NAME}:${VERSION}
X2_APP_LATEST		:= ${X2_APP_NAME}:latest
X2_APP_PACKAGE	   	:= :api:api-gateway:bootBuildImage


package: package-x2-front package-x2-api

push: push-x2-front push-x2-api

push-latest: push-latest-x2-front push-latest-x2-api

package-x2-api:
	VERSION=${VERSION} ./gradlew build ${X2_APP_PACKAGE}

push-x2-api:
	@docker push ${X2_APP_IMG}

push-latest-x2-api:
	@docker tag ${X2_APP_IMG} ${X2_APP_LATEST}
	@docker push ${X2_APP_LATEST}

package-x2-front:
	@docker build -f ${FRONT_X2_DOCKERFILE} -t ${FRONT_X2_IMG} .

push-x2-front:
	@docker push ${FRONT_X2_IMG}

push-latest-x2-front:
	@docker tag ${FRONT_X2_IMG} ${FRONT_X2_LATEST}
	@docker push ${FRONT_X2_LATEST}
